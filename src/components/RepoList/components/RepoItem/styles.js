import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  height: 90px;
  width: 120px;
  display: flex;
  flex-direction: row;

  img {
    height: 45px;
    width: 45px;
  }

  button {
    border: 0;
    background: transparent;
  }
`;

export const Avatar = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
