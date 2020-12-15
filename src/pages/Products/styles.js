import styled from 'styled-components';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  .header-content {
    width: 100%;
    padding: 20px 0 10px;

    .icon-link,
    .icon-ze {
      max-width: 60px;
      image-rendering: -webkit-optimize-contrast;
    }

    .search-navbar-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      width: ${(props) => (props.searchNavBarIsOpen ? '100%' : 0)};
      height: 100vh;
      background-color: ${colors.lighter};
      z-index: 2;
      transition: all ease-in-out 200ms;
      overflow: hidden;

      .search-navbar-content {
        display: flex;
        flex-direction: column;
        padding: 20px;

        .close-btn {
          padding: 10px;
          background-color: transparent;
          text-align: left;
          margin-left: -10px;
          margin-bottom: 20px;

          .fa {
            color: ${colors.primary};
            font-size: 24px;
          }
        }

        label {
          display: flex;
        }
      }
    }

    .buttons-container {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 10px;
      align-items: center;
      margin-top: 5px;

      .button {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: #eeeeee;
        border-radius: 8px;
        color: ${colors.dark};

        .fa {
          font-size: 14px;
        }

        .fa-map-marker-alt {
          font-size: 13px;
        }

        span {
          font-size: 14px;
        }
      }

      .location-btn {
        display: grid;
        grid-template-rows: auto auto;
        justify-content: flex-start;
        text-align: left;
        background-color: transparent;
        padding: 10px 0;

        .fa-map-marker-alt {
          display: none;
        }

        .subtitle {
          margin-bottom: 2px;
          font-weight: 300;
        }

        .info {
          display: flex;
          align-items: center;

          .title {
            font-weight: 600;
            margin-right: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 150px;
          }

          .fa-angle-down {
            min-width: 13px;
          }
        }
      }

      .bag-btn {
        position: relative;

        .text {
          display: none;
        }

        .items-count {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 18px;
          height: 18px;
          background: ${colors.primary};
          border-radius: 10px;
          z-index: 1;

          span {
            font-size: 10px;
            font-weight: 700;
            color: ${colors.dark};
          }
        }
      }
    }
  }

  @media screen and (min-width: 560px) {
    .header-content .buttons-container .location-btn .info .title {
      max-width: 300px;
    }
  }

  @media screen and (min-width: 960px) {
    .header-content {
      display: grid;
      grid-template-columns: 75px 1fr auto;
      grid-column-gap: 80px;
      align-items: center;
      padding: 15px 0;

      .icon-link,
      .icon-ze {
        max-width: 65px;
      }

      .search-navbar-wrapper {
        position: initial;
        background-color: transparent;
        height: initial;
        width: initial;

        .search-navbar-content {
          padding: 5px;

          .close-btn {
            display: none;
          }

          label {
            display: flex;

            input {
              padding: 14px;
            }
          }
        }
      }

      .buttons-container {
        grid-template-columns: auto auto;
        gap: 15px;
        margin-top: 0;

        .button {
          padding: 10px 15px;
        }

        .fa {
          margin-right: 6px;
        }

        .location-btn {
          display: flex;
          background-color: #eeeeee;
          padding: 10px 15px;
          max-width: 200px;

          .subtitle {
            display: none;
          }

          .fa-map-marker-alt {
            display: initial;
            min-width: 12px;
          }

          .fa-angle-down {
            display: none;
          }

          .info .title {
            font-weight: 400;
            max-width: 150px;
            margin-right: 0;
          }
        }

        .search-btn {
          display: none;
        }

        .bag-btn {
          .text {
            display: initial;
          }

          .items-count {
            width: 19px;
            height: 19px;
          }
        }
      }
    }
  }
`;

export const Label = styled.label`
  border: 1px solid ${(props) => (props.focus ? colors.primary : colors.white)};

  .fa {
    color: ${(props) => (props.focus ? colors.primary : '#dddddd')};
  }
`;

export const CategoriesSection = styled.section`
  background-color: ${colors.dark};

  .categories-section-container {
    max-width: 980px;
    margin: 0 auto;

    .fa-angle-left,
    .fa-angle-right {
      display: none;
    }
  }

  @media screen and (min-width: 960px) {
    .categories-section-container {
      padding: 0 20px;

      .fa-angle-left,
      .fa-angle-right {
        display: initial;
        position: absolute;
        z-index: 10;
        top: -15px;
        padding: 5px;
        font-size: 18px;
        min-width: 18px;
        background-color: ${colors.lighter};
        border-radius: 20px;
        color: ${colors.dark};
        cursor: pointer;
      }

      .fa-angle-left {
        left: -15px;
      }

      .fa-angle-right {
        right: -15px;
      }
    }
  }
`;

export const ProductsSection = styled.section`
  padding: 40px 0 60px;
  background-color: ${colors.white};
`;
