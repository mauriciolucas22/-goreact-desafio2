import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
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
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }
`;
