import styled from "styled-components";
import { props } from '.'


export const Button = styled.button<props> `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  margin-bottom:8px;
  border-radius:50%;
  background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;

`;
