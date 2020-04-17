import styled from 'styled-components';
import { darken } from 'polished';

export const Back = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 142px;
  height: 36px;
  background: #cccccc;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#CCCCCC')};
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
    width: 40px;
  }
`;
