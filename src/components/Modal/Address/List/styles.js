import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const Content = styled.div`
  display: grid;
  position: relative;
  height: 100%;
  grid-template-rows: auto auto 1fr;
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
    z-index: 10;

    img {
      justify-self: end;
      margin-top: 12px;
      max-width: 115px;
    }
  }

  .modal-address-list {
    display: flex;
    flex-direction: column;
    z-index: 10;
    margin-top: -10px;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;

    .modal-address-list {
      margin-top: -20px;
    }

    :hover {
      ::-webkit-scrollbar-thumb {
        background: #e2e2e2;
      }
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
`;

export const Label = styled.label`
  border: 1px solid ${(props) => (props.focus ? colors.primary : colors.white)};

  .fa {
    color: ${(props) => (props.focus ? colors.primary : '#dddddd')};
  }
`;
