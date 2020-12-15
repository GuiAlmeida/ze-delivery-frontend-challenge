import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 80px;
  max-width: 980px;
  margin: 100px auto;
  padding-left: 20px;

  .row {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    gap: 20px;

    .column {
      background-color: ${colors.lighter};
      border-radius: 6px;
      width: 100%;
      height: 360px;
    }
  }

  @media screen and (min-width: 960px) {
    .row {
      grid-template-columns: 230px 230px 230px 230px;
      padding-left: 0;

      .column {
        height: 300px;
      }
    }
  }
`;
