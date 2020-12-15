import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import useLocation from '../../../../utils/useLocation';

import Item from './Item';

import { TransitionContainer } from '../styles';
import { Content, Label } from './styles';

import addressModalBG from '../../../../assets/images/address_modal_bg.jpg';
import GoogleBrand from '../../../../assets/images/google_brand.png';

function List({
  index,
  currentIndex,
  visible,
  setAddress,
  handlePage,
  setPrevPage
}) {
  const [display, setDisplay] = useState(true);
  const [addressInputFocus, setAddressFocus] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(new Map());
  const addressInputRef = useRef(null);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete({
    requestOptions: {
      // eslint-disable-next-line no-undef
      location: new google.maps.LatLng(
        -12.117252857269783,
        -50.634503308562174
      ),
      radius: 2010367,
      types: ['address']
    },
    debounce: 300
  });

  function getMap({ coords: { latitude, longitude } }) {
    const parameter = {
      location: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
      }
    };

    getGeocode(parameter).then((results) => {
      const address = useLocation(results);

      setAddress(address);
      handlePage(2);
      setSelectedAddress(new Map());
    });
  }

  function requestLocation() {
    navigator.geolocation.getCurrentPosition(getMap, () => null, {
      timeout: 15000,
      maximumAge: 10000,
      enableHighAccuracy: true
    });
  }

  const handleSelectAddress = ({ place_id: id, description }) => () => {
    const selectedItem = new Map();
    selectedItem.set(id, !selectedAddress.get(id));

    setSelectedAddress(selectedItem);
    setValue(description, false);

    getGeocode({ address: description }).then((results) => {
      const address = useLocation(results);

      setAddress(address);
      setPrevPage(1);
      handlePage(3);
    });
  };

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      setDisplay(visible);

      if (visible) addressInputRef.current.focus();
    }, 150);
  }, [visible]);

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex < index) {
        setValue('');
        setSelectedAddress(new Map());
      }
    }, 500);
  }, [currentIndex]);

  return (
    <TransitionContainer visible={visible} display={display.toString()}>
      <Content>
        <img src={addressModalBG} alt="Street" className="modal-bg" />
        <div className="modal-header">
          <FaAngleLeft
            className="fa fa-angle-left"
            onClick={() => handlePage(0)}
          />
          <div className="modal-icon-container">
            <FaMapMarkerAlt className="fa fa-map-marker-alt" />
            <span>Onde você quer receber seu pedido?</span>
          </div>
        </div>
        <div className="modal-address-options">
          <Label htmlFor="address" focus={addressInputFocus}>
            <FaSearch className="fa fa-search" />
            <input
              ref={addressInputRef}
              name="address"
              placeholder="Buscar endereço e número"
              value={value}
              disabled={!ready}
              onChange={handleInputChange}
              onFocus={() => setAddressFocus(true)}
              onBlur={() => setAddressFocus(false)}
            />
          </Label>
          <img src={GoogleBrand} alt="Powered by Google" />
        </div>
        <div className="modal-address-list">
          {status === 'OK' &&
            data.map((suggestion) => {
              // eslint-disable-next-line camelcase
              const { place_id: id, structured_formatting } = suggestion;

              return (
                <Item
                  key={id}
                  item={{
                    title: structured_formatting.main_text,
                    description: structured_formatting.secondary_text
                  }}
                  selected={!!selectedAddress.get(id)}
                  handleSelectAddress={handleSelectAddress(suggestion)}
                />
              );
            })}
          {(status === 'OK' || status === 'ZERO_RESULTS') && (
            <Item
              item={{
                title: 'Não achei meu endereço',
                description: 'Quero buscar no mapa'
              }}
              defaultButton
              nextPage={requestLocation}
            />
          )}
        </div>
        {/*
          <Item
            item={{
              title: 'Não achei meu endereço',
              description: 'Quero buscar no mapa'
            }}
            defaultButton
            handleCurrentPage={handleCurrentPage}
          />
        */}
      </Content>
    </TransitionContainer>
  );
}

List.propTypes = {
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  setAddress: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
  setPrevPage: PropTypes.func.isRequired
};

export default List;
