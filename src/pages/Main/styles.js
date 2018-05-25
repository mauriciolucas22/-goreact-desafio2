import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
`;

export const SideBar = styled.div`
  background: #fff;
  width: 320px;
  height: 100%;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 2px 2px #ffc;
`;

export const Form = styled.form`
  height: 50px;
  margin-bottom: 20px;

  button {
    background: #59EA9A;
    border: 0;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    padding: 0 20px;
    color: #fff;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
  }

  input {
    background: #EEE;
    height: 50px;
    width: 200px;
    border-radius: 3px;
    padding: 10px;
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }
`;
