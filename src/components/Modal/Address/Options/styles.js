import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const Content = styled.div`
  display: grid;
  position: relative;
  height: 100%;
  grid-template-rows: auto auto 1fr;
  gap: 20px;
  padding: 20px;

  .modal-bg {
    position: absolute;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .modal-header {
    display: grid;
    grid-template-rows: auto 1fr;
    z-index: 10;

    .fa-angle-left {
      color: ${colors.primary};
      font-size: 26px;
      margin-left: -7px;
      cursor: pointer;
    }

    .modal-icon-container {
      display: grid;
      grid-template-rows: auto;
      gap: 40px;
      justify-items: center;

      .fa-map-marker-alt {
        color: #e1e1e1;
        font-size: 40px;
      }

      span {
        font-size: 18px;
        font-weight: 600;
        text-align: center;
      }
    }
  }

  .modal-address-options {
    display: grid;
    grid-template-rows: auto;
    gap: 20px;

    z-index: 10;

    .label {
      cursor: text;
    }

    input {
      pointer-events: none;
    }

    button.gps-button {
      padding: 15px 14px;
      border-radius: 10px;
      display: flex;
      align-items: center;

      .gps {
        margin-right: 10px;
      }

      span {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  .modal-address-login {
    align-self: end;
    justify-self: center;
    margin-bottom: 50px;

    span {
      font-weight: 600;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;
