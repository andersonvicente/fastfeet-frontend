import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  form {
    > div {
      display: flex;
      flex-direction: column;
      background: #f5f5f5;
      width: 900px;
      justify-content: space-between;

      > header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 300px;
        }
      }

      > div {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        border-radius: 5px;
        width: 100%;
        height: 200px;
        justify-content: center;

        > div {
          display: flex;
          flex-direction: row;
          width: 840px;
          justify-content: space-between;
        }
      }
    }
  }
`;

export const BoxSelect = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  span {
    font-weight: bold;
    font-family: 16px 'Roboto', sans-serif;
    margin-bottom: 10px;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 840px;
  font-weight: bold;
  font-family: 16px 'Roboto', sans-serif;

  span {
    font-weight: bold;
    font-family: 16px 'Roboto', sans-serif;
    margin-bottom: 10px;
  }

  input {
    background: none;
    border: 1;
    border-style: solid;
    border-width: 0.5px;
    border-color: #dddddd;
    border-radius: 4px;
    width: 840px;
    height: 45px;
    padding: 0 20px;
    color: #000;

    &::placeholder {
      color: #999;
    }
  }
`;
