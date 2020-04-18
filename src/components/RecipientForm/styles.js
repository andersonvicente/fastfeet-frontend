import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

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
        width: 900px;
        height: 300px;
        display: flex;
        flex-direction: row;
        background: #fff;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        > div {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 840px;
          height: 250px;

          p {
            display: flex;
            flex-direction: column;
            color: #444444;
            width: auto;
            font-weight: bold;
            font-family: 14px 'Roboto', sans-serif;

            input {
              margin: 5px 0 20px 0;
              background: none;
              border: 1;
              border-style: solid;
              border-width: 0.5px;
              border-color: #dddddd;
              border-radius: 4px;
              padding: 0 20px;
              color: #000;
              height: 45px;

              &::placeholder {
                color: #999;
              }
            }
          }
        }
      }
    }
  }
`;

export const InputName = styled(Input)`
  width: 840px;
`;

export const InputAddressStreet = styled(Input)`
  width: 518px;
`;

export const InputAddressNumber = styled(Input)`
  width: 150px;
`;

export const InputAddressComplement = styled(Input)`
  width: 140px;
`;

export const InputCity = styled(Input)`
  width: 268px;
`;

export const InputState = styled(Input)`
  width: 268px;
`;

export const InputZipCode = styled(Input)`
  width: 268px;
`;
