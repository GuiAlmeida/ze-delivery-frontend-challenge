import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const Container = styled.button`
  min-height: 130px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${colors.white};
  color: ${colors.dark};
  text-align: left;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 1px 3px 0px;
  position: relative;
  overflow: hidden;

  .featured-section-product-info {
    margin-right: 70px;

    h2 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    span {
      color: #a2a1a1;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
    }
  }

  .imageUrl {
    position: absolute;
  }

  .skol-pilsen {
    width: 100px;
    right: -20px;
  }

  .brahma-duplo-malte {
    position: absolute;
    width: 90px;
    right: -20px;
  }

  .jack-daniels {
    width: 80px;
    right: -15px;
  }
`;
