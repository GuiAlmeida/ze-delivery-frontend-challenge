import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 5px;
  max-width: 400px;
  height: 100%;
  margin: 40px auto 30px;
  padding: 0 20px;
  text-align: center;

  .fa-sad-cry {
    margin: 0 auto;
    font-size: 120px;
    margin-bottom: 25px;
  }

  h2 {
    font-size: 18px;
  }

  .btn {
    margin: 30px auto 0;
    max-width: 280px;
  }

  @media screen and (min-width: 560px) {
    padding: 0;

    h2 {
      font-size: 22px;
    }
  }
`;
