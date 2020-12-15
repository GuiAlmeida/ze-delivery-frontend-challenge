import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background-color: transparent;
  padding: 12px;
  margin-left: ${(props) => (props.index === 0 ? '20px' : '0')};
  margin-right: 20px;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  transition: background-color 0.5s ease 0s;
  text-align: left;
  user-select: none;
  cursor: default;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 166px;
    margin-bottom: 16px;
    border-radius: 4px;
    background-color: #f9f9f9;
    transition: background-color 0.5s ease 0s;

    img {
      width: 65%;
      border-radius: 4px;
      vertical-align: bottom;
    }
  }

  .title {
    color: ${colors.dark};
    font-size: 16px;
    font-weight: 600;
    flex: 1;
  }

  .price {
    color: ${colors.primary};
    font-size: 16px;
    font-weight: 600;
    margin-top: 15px;
  }

  .buttons-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: center;
    margin-top: 20px;

    button {
      height: 40px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .preview-btn {
      padding: 0 12px;
      background-color: #eeeeee;

      .fa-eye {
        font-size: 18px;
        color: ${colors.dark};
      }
    }

    .buy-btn {
      padding: 0 10px;

      .fa-shopping-bag {
        font-size: 14px;
        margin-right: 10px;
      }

      span {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0px;
      }
    }
  }

  :hover {
    opacity: 1;
    background-color: #fffef6;
    border: 1px solid ${colors.primary};

    .image-container {
      background-color: #fffffb;
    }
  }

  @media screen and (min-width: 960px) {
    width: 230px;
    margin-left: 0;
    margin-right: ${(props) => (props.index === 11 ? '0' : '20px')};
    padding: 15px;

    .image-container {
      height: 183px;

      img {
        width: 70%;
      }
    }

    .buttons-container .buy-btn .fa-shopping-bag {
      margin-right: 8px;
    }
  }
`;
