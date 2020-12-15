import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import SkolPilsen from '../../../../../assets/images/skol_pilsen.png';
import BrahmaDuploMalte from '../../../../../assets/images/brahma_duplo_malte.png';
import JackDaniels from '../../../../../assets/images/jack_daniels.png';

function FeaturedProduct({ item, getAddress }) {
  return (
    <Container onClick={getAddress}>
      <div className="featured-section-product-info">
        <h2>{item.name}</h2>
        <span>{item.description}</span>
      </div>
      {item.key === 'skol-pilsen' && (
        <img
          src={SkolPilsen}
          alt={item.name}
          className="imageUrl skol-pilsen"
        />
      )}
      {item.key === 'brahma-duplo-malte' && (
        <img
          src={BrahmaDuploMalte}
          alt={item.name}
          className="imageUrl brahma-duplo-malte"
        />
      )}
      {item.key === 'jack-daniels' && (
        <img
          src={JackDaniels}
          alt={item.name}
          className=" imageUrl jack-daniels"
        />
      )}
    </Container>
  );
}

FeaturedProduct.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  getAddress: PropTypes.func.isRequired
};

export default FeaturedProduct;
