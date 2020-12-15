import React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';

import { Container } from './styles';

function Item({
  item: { title, description },
  defaultButton,
  selected,
  handleSelectAddress,
  nextPage
}) {
  function handleClick() {
    if (defaultButton) {
      return nextPage();
    }

    return handleSelectAddress();
  }

  return (
    <Container
      primary={defaultButton}
      selected={selected}
      onClick={handleClick}
    >
      {defaultButton ? (
        <FaMapMarkedAlt className="fa fa-map-marked-alt" />
      ) : (
        <FaMapMarkerAlt className="fa fa-map-marker-alt" />
      )}
      <div className="modal-address-list-info">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </Container>
  );
}

Item.defaultProps = {
  defaultButton: false,
  selected: false,
  handleSelectAddress: null,
  nextPage: null
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  defaultButton: PropTypes.bool,
  selected: PropTypes.bool,
  handleSelectAddress: PropTypes.func,
  nextPage: PropTypes.func
};

export default Item;
