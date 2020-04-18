import styled from 'styled-components';
import { darken } from 'polished';
import { MdMoreHoriz } from 'react-icons/md';

export const Container = styled.div`
  width: 1200px;
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  align-self: center;
  flex-direction: column;
  z-index: 1000;

  form {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 90%;

    margin-top: 30px;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 142px;
      height: 36px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }

      svg {
        width: 30%;
      }
    }
  }
`;

export const IconInput = styled.div`
  display: flex;
  flex-direction: row;
  border: 1;
  border-style: solid;
  border-width: 0.5px;
  border-color: #dddddd;
  border-radius: 4px;
  background: #fff;
  width: 237px;
  height: 36px;

  svg {
    width: 15%;
    color: #999;
    margin-top: 5px;
  }

  input {
    border: 0;
    width: 85%;
    height: 30px;
    padding: 0 0px;
    color: #000;
    margin-top: 3px;

    &::placeholder {
      color: #999;
    }
  }
`;

export const ListHeader = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: row;
  background: none;
  font-weight: bold;
`;

export const Header = styled.li`
  width: ${props => props.width};
  text-align: ${props => (props.center ? 'center' : 'left')};
  padding-top: 20px;
`;

export const ListItem = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: row;
  background: none;
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 5px;
`;

export const Item = styled.li`
  position: relative;
  width: ${props => props.width};
  height: 57px;
  color: #444;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;

export const IconName = styled.text`
  background: rgba(0, 255, 0, 0.1);
  color: #999;
  content: ${props => props.name};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  padding-top: 10px;
  vertical-align: middle;
`;

export const ButtonActions = styled(MdMoreHoriz)`
  cursor: pointer;
`;

export const ListActions = styled.ul`
  position: absolute;
  width: 150px;
  left: calc(-55px);
  top: calc(55px);
  background: #fff;
  border-radius: 4px;
  padding: 0 10px;
  border: 1px solid;
  border-color: #ddd;
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 1;

  li {
    display: flex;
    flex-direction: initial;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    p {
      margin-left: 5px;
      font: 16px 'Roboto', sans-serif;
      color: #999;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50%);
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #ddd;
  }
`;
