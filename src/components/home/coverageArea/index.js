import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function FeaturedProduct({ item }) {
  return (
    <Container>
      <a href={item.href}>{item.name}</a>
    </Container>
  );
}

FeaturedProduct.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired
};

export default FeaturedProduct;
