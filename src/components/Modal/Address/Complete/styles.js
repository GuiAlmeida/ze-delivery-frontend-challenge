import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const Content = styled.div`
  display: grid;
  position: relative;
  height: 100%;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;

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

      .fa-map-marker-alt {
        color: #e1e1e1;
        font-size: 40px;
        justify-self: center;
      }

      span.title {
        font-size: 16px;
        font-weight: 600;
        color: ${colors.dark};
        padding-right: 8px;
      }

      span.description {
        font-size: 14px;
        font-weight: 300;
        color: #777777;
      }
    }
  }

  form {
    z-index: 10;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 30px;

    .modal-address-number-complement {
      display: grid;
      grid-template-rows: auto;
      grid-row-gap: 20px;

      input {
        width: inherit;
      }
    }

    .field-name {
      font-weight: 600;
      font-size: 16px;
    }

    .address-name {
      .button-container {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 130px 130px;
        grid-column-gap: 20px;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          margin: 0;
          background: #f1f1f1;
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          font-size: 16px;
          color: #888888;

          .fa {
            min-width: 18px;
            font-size: 18px;
            margin-right: 6px;
          }
        }

        .selected {
          border: 1px solid ${colors.primary};
          color: ${colors.primary};
        }
      }
    }

    button {
      align-self: end;
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 560px) {
    form .modal-address-number-complement {
      display: grid;
      grid-template-columns: 150px 1fr;
      grid-row-gap: 5px;
      grid-column-gap: 20px;

      input {
        width: inherit;
      }
    }
  }
`;
