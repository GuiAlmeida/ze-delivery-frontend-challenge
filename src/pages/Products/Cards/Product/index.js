import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaShoppingBag } from 'react-icons/fa';

import { Container } from './styles';

function Categories({ lastItem, index, item }) {
  return (
    <Container lastItem={lastItem} index={index} onClick={() => {}}>
      <div className="image-container">
        <img src={item.images[0].url} alt={item.title} draggable="false" />
      </div>
      <span className="title">{item.title}</span>
      <span className="price">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(item.productVariants[0].price)}
      </span>
      <div className="buttons-container">
        <div
          role="button"
          className="button preview-btn"
          tabIndex={0}
          onClick={() => {}}
          onKeyPress={() => {}}
        >
          <FaEye className="fa fa-eye" />
        </div>
        <div
          role="button"
          className="button buy-btn"
          tabIndex={0}
          onClick={() => {}}
          onKeyPress={() => {}}
        >
          <FaShoppingBag className="fa fa-shopping-bag" />
          <span>Comprar</span>
        </div>
      </div>
    </Container>
  );
}

Categories.propTypes = {
  lastItem: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Categories;
