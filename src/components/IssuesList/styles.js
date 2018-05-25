import styled from 'styled-components';

// flex-wrap: quebra de linha

export const Container = styled.div`
  margin-left: 320px;
  width: 100%;

  select {
    width: 120px;
    height: 30px;
    border: 1;
    background: #fff;
    border-radius: 3px;
    border-color: #F5F5F5;
    margin-left: 500px;
  }
`;

export const Description = styled.div`
  margin-left: 100px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  padding: 30px;
  background: #fff;
  box-shadow: 2px 2px 2px #ffc;
`;

export const List = styled.div`
  display: flex;
  flex-direction: 'row';
  flex-wrap: wrap;
`;
