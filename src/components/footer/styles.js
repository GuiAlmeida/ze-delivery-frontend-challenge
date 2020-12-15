import styled from 'styled-components';
import colors from '../../assets/colors';

export const FooterSection = styled.div`
  padding-top: 75px;
  background-color: ${colors.darker};

  .footer-section-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;

    .footer-section-column {
      margin-bottom: 20px;

      .footer-section-subtitle {
        color: ${colors.white};
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 600;
      }

      .footer-section-list {
        display: grid;
        grid-template-rows: auto;
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        padding-bottom: 0;
        gap: 15px;
        grid-auto-columns: 1fr;

        a {
          font-size: 16px;
          font-weight: 300;
        }
      }
    }
  }

  .footer-section-copyright {
    display: grid;
    align-items: center;
    grid-template-columns: auto;
    gap: 20px;
    padding: 50px 0 20px;

    span {
      color: #444444;
      font-weight: 300;
      letter-spacing: -0.5px;
    }

    .footer-section-social {
      max-width: 150px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 12px;
      margin-left: -5px;

      .fa {
        font-size: 18px;
        padding: 5px;

        :hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media screen and (min-width: 560px) {
    .footer-section-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }

  @media screen and (min-width: 580px) {
    .footer-section-copyright {
      grid-template-columns: 1fr auto;
    }
  }

  @media screen and (min-width: 960px) {
    .footer-section-content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
