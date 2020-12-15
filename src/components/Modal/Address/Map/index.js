import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { getGeocode } from 'use-places-autocomplete';
import { FaAngleLeft } from 'react-icons/fa';
import { GOOGLE_API_KEY } from '../../../../constants';
import useLocation from '../../../../utils/useLocation';

import colors from '../../../../assets/colors';
import { TransitionContainer } from '../styles';
import { Content } from './styles';

import currentLocationImage from '../../../../assets/images/marker_current_location.png';
import LocationPinImage from '../../../../assets/images/location_pin.png';
import Gps from '../../../../assets/images/gps.svg';

const options = {
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          color: '#cfcfcf'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bababa'
        }
      ]
    }
  ],
  clickableIcons: false,
  disableDoubleClickZoom: true,
  disableDefaultUI: true,
  gestureHandling: 'greedy'
};

const MyMapComponent = withScriptjs(
  withGoogleMap(
    ({
      refMap,
      refMarker,
      defaultCenter,
      currentLocation,
      currentCenter,
      handleBoundsChanged,
      onDragEnd
    }) => (
      <GoogleMap
        ref={refMap}
        defaultZoom={17}
        options={options}
        center={defaultCenter}
        onBoundsChanged={useCallback(handleBoundsChanged)}
        onDragEnd={onDragEnd}
      >
        <Marker icon={currentLocationImage} position={currentLocation} />
        <Marker
          ref={refMarker}
          icon={LocationPinImage}
          draggable={false}
          position={currentCenter}
        />
      </GoogleMap>
    )
  )
);

function Map({ address, visible, setAddress, handlePage, setPrevPage }) {
  const [display, setDisplay] = useState(true);
  const refMap = useRef(null);
  const refMarker = useRef(null);
  const [defaultCenter, setDefaultCenter] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loadingNewAddress, setLoadingNewAddress] = useState(false);

  function handleBoundsChanged() {
    setCurrentCenter(refMap.current.getCenter());
  }

  function backToCenter() {
    refMap.current.panTo(defaultCenter);
  }

  function onDragEnd() {
    setLoadingNewAddress(true);

    const parameter = {
      location: {
        lat: parseFloat(refMarker.current.getPosition().lat()),
        lng: parseFloat(refMarker.current.getPosition().lng())
      }
    };

    getGeocode(parameter).then((results) => {
      const res = useLocation(results);

      setAddress(res);
      setLoadingNewAddress(false);
    });
  }

  function handleSubmit() {
    setPrevPage(2);
    handlePage(3);
  }

  useEffect(() => {
    if (visible && address) {
      const latLng = { lat: address.lat, lng: address.lng };

      setDefaultCenter(latLng);
      setCurrentCenter(latLng);
      setCurrentLocation(latLng);
    }

    setTimeout(() => setDisplay(visible), 150);
  }, [visible]);

  return (
    <TransitionContainer visible={visible} display={display.toString()}>
      <Content>
        <MyMapComponent
          refMap={refMap}
          refMarker={refMarker}
          defaultCenter={defaultCenter}
          currentLocation={currentLocation}
          currentCenter={currentCenter}
          onDragEnd={onDragEnd}
          handleBoundsChanged={handleBoundsChanged}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div className="modal-header">
          <FaAngleLeft
            className="fa fa-angle-left"
            onClick={() => handlePage(1)}
          />
          <div className="modal-address-info">
            {address && (
              <>
                <span className="title">{`${address.streetName}, ${address.streetNumber}`}</span>
                <span className="description">{`${address.district}, ${address.city} - ${address.uf}`}</span>
              </>
            )}
          </div>
        </div>
        {!loadingNewAddress && (
          <>
            <button type="button" className="gps-button" onClick={backToCenter}>
              <Gps
                fill={colors.primary}
                className="gps"
                width={28}
                heigth={28}
              />
            </button>
            <button
              type="button"
              className="button button-large"
              onClick={handleSubmit}
            >
              Confirmar localização
            </button>
          </>
        )}
      </Content>
    </TransitionContainer>
  );
}

Map.defaultProps = {
  address: null
};

Map.propTypes = {
  address: PropTypes.objectOf(PropTypes.any),
  visible: PropTypes.bool.isRequired,
  setAddress: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
  setPrevPage: PropTypes.func.isRequired
};

export default Map;
