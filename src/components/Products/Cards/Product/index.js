import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaShoppingBag } from 'react-icons/fa';

import { Container } from './styles';

function Categories({ index, item }) {
  return (
    <Container index={index} onClick={() => {}}>
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
        <button type="button" onClick={() => {}} className="preview-btn">
          <FaEye className="fa fa-eye" />
        </button>
        <button type="button" onClick={() => {}} className="buy-btn">
          <FaShoppingBag className="fa fa-shopping-bag" />
          <span>Comprar</span>
        </button>
      </div>
    </Container>
  );
}

Categories.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Categories;
