import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.div`
  max-width: 980px;
  padding-top: 40px;
  margin: 0 auto;

  .categories-section-heading {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 0 20px;
  }

  .fa-angle-left,
  .fa-angle-right {
    display: none;
  }

  @media screen and (min-width: 960px) {
    padding: 40px 20px 0;

    .categories-section-heading {
      padding: 0;
    }

    .fa-angle-left,
    .fa-angle-right {
      display: initial;
      position: absolute;
      z-index: 10;
      top: -15px;
      padding: 5px;
      font-size: 18px;
      min-width: 18px;
      background-color: ${colors.primary};
      border-radius: 20px;
      color: ${colors.white};
      cursor: pointer;
    }

    .fa-angle-left {
      left: -15px;
    }

    .fa-angle-right {
      right: -15px;
    }
  }
`;
