import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaHome, FaMapMarkerAlt, FaMugHot } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import useForm from '../../../../utils/useForm';
import { addressNames } from '../../../../mocks';
import validate from './formValidationRules';

import { Input } from '../../../../assets/globalStyles';
import { TransitionContainer } from '../styles';
import { Content } from './styles';

import addressModalBG from '../../../../assets/images/address_modal_bg.jpg';

function Address({ address, visible, prevPage, handlePage }) {
  const [, setCookie] = useCookies();
  const [display, setDisplay] = useState(true);
  const [selectedAddressName, setSelectedAddressName] = useState(new Map());
  const { values, errors, handleChange, handleSubmit } = useForm(
    // eslint-disable-next-line no-use-before-define
    submit,
    validate
  );

  function submit() {
    const data = {
      ...address,
      streetNumber: values.streetNumber,
      complement: values.complement || '',
      name: values.addressName
    };

    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    setCookie('userAddress', JSON.stringify(data), {
      path: '/',
      expires
    });
  }

  function onPressAddressName(name) {
    const selectedItem = new Map();
    selectedItem.set(name.id, !selectedAddressName.get(name.id));
    values.addressName = name.label;
    setSelectedAddressName(selectedItem);
  }

  useEffect(() => {
    if (visible && address) {
      values.streetNumber = address.streetNumber;
    }

    setTimeout(() => {
      setDisplay(visible);
      setSelectedAddressName(new Map());
    }, 150);
  }, [visible]);

  return (
    <TransitionContainer visible={visible} display={display.toString()}>
      <Content>
        <img src={addressModalBG} alt="Street" className="modal-bg" />
        <div className="modal-header">
          <FaAngleLeft
            className="fa fa-angle-left"
            onClick={() => handlePage(prevPage)}
          />
          <div className="modal-icon-container">
            <FaMapMarkerAlt className="fa fa-map-marker-alt" />
            <div className="address-info">
              {address && (
                <>
                  <span className="title">{address.streetName}</span>
                  <span className="description">{`${address.district}, ${address.city} - ${address.uf}`}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-address-number-complement">
            <Input
              name="streetNumber"
              type="number"
              placeholder="Número"
              value={values.streetNumber}
              error={errors.streetNumber}
              onChange={handleChange}
            />
            <Input
              name="complement"
              type="text"
              placeholder="Complemento"
              value={values.complement}
              onChange={handleChange}
            />
          </div>
          <div className="address-name">
            <p className="field-name">Favoritar como</p>
            <div className="button-container">
              {addressNames.map((name) => (
                <button
                  key={name.id.toString()}
                  type="button"
                  className={selectedAddressName.get(name.id) ? 'selected' : ''}
                  onClick={() => onPressAddressName(name)}
                >
                  {name.label === 'Casa' ? (
                    <FaHome className="fa fa-home" />
                  ) : (
                    <FaMugHot className="fa fa-mug-hot" />
                  )}
                  <span>{name.label}</span>
                </button>
              ))}
            </div>
            {errors.addressName && (
              <p className="errorMessage">Campo obrigatório *</p>
            )}
          </div>
          <button type="submit" className="button button-large">
            <span>Salvar endereço</span>
          </button>
        </form>
      </Content>
    </TransitionContainer>
  );
}

Address.defaultProps = {
  address: null,
  prevPage: null
};

Address.propTypes = {
  address: PropTypes.objectOf(PropTypes.any),
  visible: PropTypes.bool.isRequired,
  prevPage: PropTypes.number,
  handlePage: PropTypes.func.isRequired
};

export default Address;
