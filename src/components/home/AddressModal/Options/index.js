import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { getGeocode } from 'use-places-autocomplete';
import { useCookies } from 'react-cookie';
import useLocation from '../../../../utils/useLocation';

import { TransitionContainer } from '../styles';
import { Content } from './styles';

import addressModalBG from '../../../../assets/images/address_modal_bg.jpg';
import Gps from '../../../../assets/images/gps.svg';
import colors from '../../../../assets/colors';

function Options({ visible, handlePage, closeModal }) {
  const [display, setDisplay] = useState(true);
  const [locationLoading, setLocationLoading] = useState(false);
  const [, setCookie] = useCookies();

  function handleCurrentLocation(position) {
    setTimeout(() => {
      const { latitude, longitude } = position.coords;
      const parameter = {
        location: {
          lat: parseFloat(latitude),
          lng: parseFloat(longitude)
        }
      };

      getGeocode(parameter).then((results) => {
        const address = useLocation(results);

        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);

        setCookie('userAddress', JSON.stringify(address), {
          path: '/',
          expires
        });

        setLocationLoading(false);
      });
    }, 1000);
  }

  async function requestLocation() {
    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      handleCurrentLocation,
      () => setLocationLoading(false),
      {
        timeout: 15000,
        maximumAge: 10000,
        enableHighAccuracy: true
      }
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setDisplay(visible);
    }, 150);
  }, [visible]);

  return (
    <TransitionContainer visible={visible} display={display.toString()}>
      <Content>
        <img src={addressModalBG} alt="Street" className="modal-bg" />
        <div className="modal-header">
          <FaAngleLeft className="fa fa-angle-left" onClick={closeModal} />
          <div className="modal-icon-container">
            <FaMapMarkerAlt className="fa fa-map-marker-alt" />
            <span>Onde você quer receber seu pedido?</span>
          </div>
        </div>
        <div className="modal-address-options">
          <div
            role="button"
            className="label"
            tabIndex={0}
            onClick={() => handlePage(1)}
            onKeyPress={() => handlePage(1)}
          >
            <FaSearch className="fa fa-search" />
            <input disabled placeholder="Buscar endereço e número" />
          </div>
          <button
            type="button"
            className={locationLoading ? 'gps-button disabled' : 'gps-button'}
            disable={locationLoading.toString()}
            onClick={requestLocation}
          >
            <Gps fill={colors.white} className="gps" width={22} heigth={22} />
            <span>Usar minha localização</span>
          </button>
        </div>
        <div className="modal-address-login">
          <span>Já tem uma conta?</span>
          <button type="button" className="button-link">
            Faça o login
          </button>
        </div>
      </Content>
    </TransitionContainer>
  );
}

Options.propTypes = {
  visible: PropTypes.bool.isRequired,
  handlePage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Options;
