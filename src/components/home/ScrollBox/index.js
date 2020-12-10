import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useScrollBox from '../../../utils/useScrollBox';

import { Container } from './styles';

function ScrollBox({ children }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);

  return (
    <Container>
      <div className="scroll-box__wrapper" ref={scrollWrapperRef}>
        <div
          className="scroll-box__container"
          role="list"
          style={{ pointerEvents: isDragging ? 'none' : undefined }}
        >
          {children.map((child, i) => (
            <div
              role="listitem"
              key={`scroll-box-item-${i.toString()}`}
              className="scroll-box__item"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

ScrollBox.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScrollBox;
