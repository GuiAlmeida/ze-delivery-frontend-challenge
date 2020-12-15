import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const Container = styled.button`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 10px;
  margin-left: 20px;
  margin-right: ${(props) => (props.lastItem ? '20px' : '10px')};
  padding: 0;
  background-color: transparent;
  user-select: none;
  border: none;
  cursor: pointer;

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 3px 4px 0px -1px;

    img {
      max-width: 80px;
    }
  }

  span {
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    color: ${colors.white};
  }

  @media screen and (min-width: 960px) {
    margin-left: 0;
    margin-right: ${(props) => (props.lastItem ? '0' : '31.7px')};
  }
`;
