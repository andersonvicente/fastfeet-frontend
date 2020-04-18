import styled from 'styled-components';

export const Container = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  background: ${props => props.background};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Point = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 0 5px 0 5px;
  background: ${props => props.color};
`;

export const Text = styled.span`
  font-weight: bold;
  margin: 0 5px 0 0;
  color: ${props => props.color};
  font-family: 14px 'Roboto', sans-serif;
`;
