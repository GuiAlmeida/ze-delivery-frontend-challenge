import styled from 'styled-components';
import colors from '../../../../../assets/colors';

export const Container = styled.button`
  display: grid;
  grid-template-columns: 46px 1fr;
  padding: 20px 0;
  background-color: transparent;
  border-radius: 8px;
  border: ${(props) =>
    props.selected ? `1px solid ${colors.primary}` : '1px solid #f9f9f9'};
  margin-bottom: ${(props) => (props.primary ? '60px' : 0)};

  .fa {
    align-self: center;
    font-size: 22px;
    color: ${(props) => (props.primary ? colors.primary : colors.dark)};
    margin-left: 10px;
  }

  .modal-address-list-info {
    display: grid;
    gap: 2px;
    justify-self: start;

    span {
      text-align: left;
    }

    span.title {
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => (props.primary ? colors.primary : colors.dark)};
    }

    span.description {
      font-size: 14px;
      font-weight: 300;
      color: #bbbbbb;
    }
  }
`;
