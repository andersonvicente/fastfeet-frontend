import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  display: ${props => (props.show === true ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  > div {
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 20px;

    width: 200px;
    height: 200px;
    background: #fff;
    border: 0;
    border-radius: 4px;
    width: 450px;
    height: 353px;

    text {
      margin-bottom: 5px;
      font: 16px 'Roboto', sans-serif;
      color: #666666;

      > strong {
        margin-right: 5px;
      }
    }

    h6 {
      margin-bottom: 5px;
      font: 14px 'Roboto', sans-serif;
      color: #444444;
      font-weight: bold;
    }

    hr {
      margin: 10px 0 10px 0;
      border-width: 0.1px;
      width: 90%;
    }

    img {
      width: 300px;
      height: 100px;
      align-self: center;
      align-items: center;
    }
  }
`;
