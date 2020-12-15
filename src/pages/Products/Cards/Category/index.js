/* eslint-disable prefer-template */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Categories({ item, lastItem }) {
  return (
    <Container lastItem={lastItem} onClick={() => {}}>
      <div className="image-container">
        <img
          src={
            require('../../../../assets/images/categories/' + item.imageName)
              .default
          }
          alt={item.name}
          draggable="false"
        />
      </div>
      <span>{item.name}</span>
    </Container>
  );
}

Categories.propTypes = {
  lastItem: PropTypes.bool.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Categories;
