import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../../utils/useWindowDimensions';

import { Container, Content } from './styles';

const Modal = forwardRef(({ children }, ref) => {
  const [isShowing, _setIsShowing] = useState(false);
  const isShowingRef = useRef(isShowing);
  const [opacity, setOpacity] = useState(false);
  const { width } = useWindowDimensions();

  function setIsShowing(data) {
    isShowingRef.current = data;
    _setIsShowing(data);
  }

  function closeModal() {
    setOpacity(false);

    setTimeout(() => {
      setIsShowing(false);

      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.overflowX = 'hidden';
      if (width >= 960) document.documentElement.style.paddingRight = '0';
    }, 150);
  }

  function handleClickOutside(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (
      isShowingRef.current &&
      (!path ||
        !path.filter((item) => {
          if (
            item.className &&
            typeof item.className === 'string' &&
            item.className.includes('modal-container')
          ) {
            return item;
          }
          return false;
        }).length)
    ) {
      closeModal();
    }
  }

  useImperativeHandle(ref, () => ({
    open() {
      document.addEventListener('mousedown', handleClickOutside);
      document.documentElement.style.overflowY = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      if (width >= 960) document.documentElement.style.paddingRight = '17px';

      setIsShowing(true);
      setTimeout(() => setOpacity(true), 100);
    },

    close() {
      closeModal();
    }
  }));

  return (
    isShowing && (
      <Container
        show={isShowing}
        opacity={opacity.toString()}
        data-testid="modal-container"
      >
        <Content>{children}</Content>
      </Container>
    )
  );
});

Modal.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Modal;
