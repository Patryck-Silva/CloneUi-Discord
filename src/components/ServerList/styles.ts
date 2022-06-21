import styled from "styled-components";

export const Container = styled.div`
  grid-area:Sl;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(32,34,37);
  padding: 11px 0;

  min-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`; export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid var(--quaternary);
    
    margin-bottom: 8px;
`;