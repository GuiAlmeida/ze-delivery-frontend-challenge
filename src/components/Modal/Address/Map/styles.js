import styled from 'styled-components';
import colors from '../../../../assets/colors';
// import colors from '../../../../assets/colors';

export const Content = styled.div`
  position: relative;
  height: 100%;

  .modal-header {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 40px);
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    padding: 20px 20px 40px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.8) 25%,
      white 100%
    );

    .fa-angle-left {
      color: ${colors.primary};
      font-size: 26px;
      margin-left: -7px;
      cursor: pointer;
    }

    .modal-address-info {
      display: grid;
      grid-template-rows: auto;
      gap: 1px;
      justify-self: center;
      text-align: center;

      span.title {
        font-size: 16px;
        font-weight: 600;
        color: ${colors.dark};
      }

      span.description {
        font-size: 14px;
        font-weight: 300;
        color: #777777;
      }
    }
  }

  .gps-button {
    position: absolute;
    right: 25px;
    bottom: 130px;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
    border-radius: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

    :hover {
      opacity: 1;
      background-color: #f9f9f9;
    }
  }

  .button {
    justify-self: center;
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translate(-50%, 0);

    :hover {
      opacity: 1;
      background-color: #f5c400;
    }
  }
`;
