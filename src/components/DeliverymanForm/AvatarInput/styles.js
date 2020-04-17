import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background: #fff;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 2px dashed #dddddd;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      border: 1;
      border: 1px dashed #dddddd;
      border-radius: 50%;
      border-spacing: 10px;
      width: 150px;
      height: 150px;

      svg {
        color: #dddddd;
      }

      span {
        color: #dddddd;
        font-weight: bold;
        font-size: 16px;
      }
    }

    input {
      display: none;
    }
  }
`;
