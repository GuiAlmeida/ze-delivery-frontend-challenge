import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10001;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.opacity === 'true' ? 1 : 0)};
  transition: opacity 0.15s ease-in-out;
  -moz-transition: opacity 0.15s ease-in-out;
  -webkit-transition: opacity 0.15s ease-in-out;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
