import styled from 'styled-components';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 52px;
  margin-bottom: 30px;

  .navbar-button {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 10;
    background-color: transparent;
    padding: 10px;

    .fa {
      color: ${colors.primary};
      font-size: 24px;
    }
  }

  .header-navbar-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    width: ${(props) => (props.navBarIsOpen ? '100%' : 0)};
    height: 100vh;
    background-color: ${colors.white};
    z-index: 2;
    transition: all ease-in-out 200ms;
    overflow: hidden;

    .header-navbar-content {
      display: flex;
      flex-direction: column;
      padding: 20px;

      .header-navbar-content-image {
        width: 200px;
        margin-bottom: 15px;
      }

      ul {
        display: inline-block;

        li {
          border-bottom: 1px solid ${colors.lighter};

          a {
            display: block;
            padding: 20px 0;
            font-size: 16px;
          }
        }
      }

      .button {
        background-color: transparent;
        color: ${colors.primary};
        font-size: 16px;
        text-align: left;
        font-weight: 400;
        padding: 20px 0;
      }
    }
  }

  @media screen and (min-width: 960px) {
    .navbar-button {
      display: none;
    }

    .header-navbar-wrapper {
      position: initial;
      background-color: transparent;
      flex: 1;
      margin: 0 auto;
      max-width: 980px;
      padding: 0 20px;
      height: initial;

      .header-navbar-content {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0;

        .header-navbar-content-image {
          display: none;
        }

        ul {
          display: inline-flex;
          align-items: center;

          li {
            margin-right: 20px;
            margin-bottom: 0;

            a {
              padding: 5px;
              font-size: 14px;
            }
          }
        }

        .button {
          padding: 5px 10px;
          background-color: ${colors.primary};
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          color: ${colors.white};
          margin-left: 5px;
        }
      }
    }
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;

  .hero-section-background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;

    .hero-section-background-left-image {
      position: absolute;
      width: 120px;
      top: 20px;
      left: -40px;
    }

    .hero-section-background-right-image {
      position: absolute;
      width: 250px;
      top: 20px;
      right: -120px;
    }
  }

  .hero-section-content {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px 60px;
    z-index: 1;

    .icon-ze {
      width: 100px;
      height: 100px;
      padding-bottom: 15px;
    }

    .hero-section-title {
      font-size: 34px;
      line-height: 38px;
      font-weight: 700;
      letter-spacing: -1.5px;
      margin-top: 10px;
      margin-bottom: 30px;

      span {
        color: ${colors.primary};
      }
    }

    .hero-section-subtitle {
      font-size: 16px;
      font-weight: 300;
    }

    .hero-section-category-card {
      position: relative;
      padding: 4px 6px;
      margin-right: 10px;
      background-color: #eeeeee;
      color: #1d1d1d;
      border-radius: 5px;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 300;
    }
  }

  @media screen and (min-width: 360px) {
    .hero-section-content .hero-section-title {
      font-size: 38px;
      line-height: 44px;
    }
  }

  @media screen and (min-width: 550px) {
    .hero-section-background {
      .hero-section-background-left-image {
        width: 200px;
        top: 20px;
        left: -80px;
      }

      .hero-section-background-right-image {
        width: 300px;
        top: 40px;
        right: -100px;
      }
    }
    .hero-section-content {
      padding: 0 20px 80px;

      .hero-section-title {
        max-width: 550px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .hero-section-background {
      .hero-section-background-left-image {
        width: 300px;
        top: 40px;
        left: -140px;
      }

      .hero-section-background-right-image {
        width: 400px;
        right: -120px;
      }
    }

    .hero-section-content {
      .icon-ze {
        width: 120px;
        height: 120px;
        padding-bottom: 15px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .hero-section-background .hero-section-background-left-image {
      width: 300px;
      top: 80px;
      left: -140px;
    }
  }

  @media screen and (min-width: 1248px) {
    .hero-section-background {
      .hero-section-background-left-image {
        width: initial;
        top: 20px;
        left: -160px;
      }

      .hero-section-background-right-image {
        width: initial;
        right: -180px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .hero-section-background {
      .hero-section-background-left-image {
        top: 40px;
        left: -80px;
      }

      .hero-section-background-right-image {
        right: -120px;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 15px;

  .button {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;

    .button {
      width: initial;
    }
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 3px 3px 0px -1px;
  cursor: pointer;

  .fa {
    margin-left: 14px;
    font-size: 20px;
    color: ${colors.primary};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }

  @media screen and (min-width: 960px) {
    max-width: 550px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  padding: 16px 14px;
  outline: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #cccccc;
`;

export const FeaturedSection = styled.section`
  padding: 50px 0;
  background-color: ${colors.white};

  .featured-section-products {
    display: grid;
    gap: 20px;
    margin-top: 30px;
  }

  @media screen and (min-width: 960px) {
    padding: 75px 0 50px;

    .featured-section-products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: auto;
    }
  }
`;

export const CoverageSection = styled.section`
  padding: 10px 0 80px;
  background-color: ${colors.white};

  .featured-section-coverage-areas-title {
    display: grid;
    grid-template-areas: 'title see-more';
    align-items: center;

    a {
      justify-self: end;
      font-weight: 300;
    }
  }

  .featured-section-coverage-areas {
    display: grid;
    grid-area: list;
    grid-template-rows: repeat(21, min-content);
    grid-auto-columns: 1fr;
    gap: 15px;
    margin-top: 30px;
  }

  @media screen and (min-width: 560px) {
    .featured-section-coverage-areas {
      grid-template-rows: repeat(11, min-content);
      grid-auto-flow: column;
      grid-area: list;
    }
  }

  @media screen and (min-width: 960px) {
    padding: 10px 0 90px;

    .featured-section-coverage-areas {
      grid-template-rows: repeat(7, min-content);
    }
  }
`;

export const AppSection = styled.section`
  padding: 80px 0;
  background-color: ${colors.primary};

  .app-section-content {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    align-items: center;

    .app-section-column-left .mockup-app {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem 0px;
      max-width: 25rem;
      width: 65vw;
      display: block;
      margin: 0px auto;
      border-radius: 10px;
    }

    .app-section-column-right {
      display: grid;
      gap: 40px;
      margin-top: 25px;

      h2 {
        font-size: 26px;
        line-height: 30px;
        text-align: center;
      }

      .app-section-lists {
        display: grid;
        gap: 15px;

        li {
          display: flex;
          align-items: center;

          .fa {
            font-size: 22px;
            min-width: 30px;
            margin-right: 10px;
          }

          span {
            font-size: 18px;
          }
        }
      }

      .app-section-store-buttons {
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        align-items: center;
        background-color: ${colors.dark};
        width: 120px;
        border-radius: 6px;
        margin: 0 auto;

        .separator {
          width: 1px;
          height: 35px;
          background-color: ${colors.white};
          opacity: 0.3;
        }

        button.apple {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        button.google-play {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        button {
          background-color: transparent;
          height: 55px;

          .fa-apple {
            font-size: 32px;
          }

          .fa-google-play {
            font-size: 26px;
          }

          :hover {
            background-color: #323232;
            opacity: 1;
          }
        }
      }
    }
  }

  @media screen and (min-width: 560px) {
    .app-section-content .app-section-column-right {
      margin-top: 0;

      h2 {
        font-size: 30px;
        line-height: 34px;
        text-align: left;
      }

      .app-section-store-buttons {
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 960px) {
    padding: 0;

    .app-section-content {
      grid-template-columns: 1fr 1fr;

      .app-section-column-left {
        margin-top: -50px;
        margin-bottom: 110px;

        .mockup-app {
          transform: perspective(64rem) rotateY(8deg) rotateX(16deg)
            rotateZ(-8deg);
          box-shadow: rgba(0, 0, 0, 0.1) -1rem 1rem 2rem 0px;
          width: 330px;
          max-width: 60%;
          margin-left: 12%;
          border-radius: 10px;
        }
      }

      .app-section-column-right {
        h2 {
          font-size: 34px;
          line-height: 38px;
        }
      }
    }
  }
`;
