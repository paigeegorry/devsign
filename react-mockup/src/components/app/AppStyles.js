import styled from 'styled-components';

export const Foot = styled.footer`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  background: #F5F5F5;
  width: 100%;
  position: relative;
  bottom: 0;
`;

export const Wrapper = styled.header`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
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
  }

  @media (min-width: 600px) {
    h1 { 
      font-size: 3.5em;
    }
  }
`;
  
export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      list-style: none;
      a {
        font-family: 'Montserrat', sans-serif;
        color: purple;
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        text-shadow: 1px 1px purple;
        color: black;
      }
    }
  }

  @media (min-width: 600px) {
    font-size: 1.25em;
    a:hover { 
      text-shadow: 1px 1px purple; 
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
