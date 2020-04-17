import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 425px;
  background: #ffffff;
  text-align: center;
  align-content: center;
  align-items: center;
  border-radius: 4px;

  img {
    margin-top: 50px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
    width: 300px;

    div {
      font-size: 12px;
      font-weight: bold;
      color: #000;
      align-self: flex-start;
      margin-bottom: 5px;
      margin-top: 5px;
    }

    input {
      background: none;
      border: 1;
      border-style: solid;
      border-width: 0.5px;
      border-color: #dddddd;
      border-radius: 4px;
      width: 300px;
      height: 45px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #7d40e7;
      align-self: baseline;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      width: 300px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
