import React, { useRef } from 'react';
import { FaSadCry } from 'react-icons/fa';

import AddressModal from '../../../components/Modal/Address';

import { Container } from './styles';

function Empty() {
  const addressModal = useRef(null);
  return (
    <Container>
      <FaSadCry className="fa fa-sad-cry" />
      <h2>Desculpe, não encontramos nenhum distribuidor por perto.</h2>
      <p>Tente novamente em outro horário ou endereço.</p>
      <button
        type="button"
        className="btn button-large"
        onClick={() => addressModal.current.openModal()}
      >
        Buscar novo endereço
      </button>
      <AddressModal ref={addressModal} />
    </Container>
  );
}

export default Empty;
