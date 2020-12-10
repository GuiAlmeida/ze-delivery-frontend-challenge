import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;

  .scroll-box__wrapper {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    box-sizing: border-box;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
  }

  .scroll-box__wrapper::-webkit-scrollbar {
    display: none;
  }

  .scroll-box__container {
    height: 100%;
    display: inline-flex;
  }

  @media screen and (min-width: 960px) {
    max-width: 716px;
  }
`;
