import styled from 'styled-components';

export const Foot = styled.footer`
font-family: sans-serif;
display: flex;
justify-content: center;
background: #F5F5F5;
`;

export const Wrapper = styled.header`
  font-family: sans-serif;
  display: flex;
  h1 {
    padding: 0;
    margin-bottom: 0;
    margin-left: 20px;
    font-family: 'Montserrat', sans-serif;
  }
  img {
    margin-left: 8px;
    width: 100px;
    height: 100px;
  }`;
  
export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      list-style: none;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
