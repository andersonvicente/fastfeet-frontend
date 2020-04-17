import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 200px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid #eee;
    }

    a {
      font-weight: bold;
      color: #999;
      margin-left: 15px;
      margin-right: 15px;

      strong {
        color: #444;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 10px;
    align-items: flex-end;
    align-self: flex-end;
    align-content: flex-end;

    strong {
      display: block;
      color: #666;
    }

    button {
      background: none;
      border: 0;
      margin-top: 2px;
      font-size: 12px;
      color: #de3b3b;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
