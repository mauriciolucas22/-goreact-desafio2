import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 20px;
  height: 90px;
  width: 350px;
  background: #fff;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50px;
  }
`;

export const Content = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    background: #B286D1;
    width: 120px;
    height: 50px;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    border: 0;
  }
`;
