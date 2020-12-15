import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 640px;
    height: 500px;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
`;

export const TransitionContainer = styled.div`
  display: ${(props) => (props.display === 'true' ? 'block' : 'none')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.15s ease-in-out;
  -moz-transition: opacity 0.15s ease-in-out;
  -webkit-transition: opacity 0.15s ease-in-out;
  width: 100%;
  height: 100%;
`;
