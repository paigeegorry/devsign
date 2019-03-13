import styled from 'styled-components';

export const UserInfoSection = styled.section`
  font-family: sans-serif;
  border-top: 1px solid gray;
  margin: 10px 0px;
  img {
    float: left;
    margin-right: 20px;
    border: 1px solid gray;
    border-radius: 50px;
    margin-top: 8px;
    padding: 10px;
  }
  h3 {
    font-family: 'Montserrat', sans-serif; 
    color: purple;
  }
  margin-bottom: 50px;
`;

export const TopPostsSection = styled.section`
font-family: sans-serif;
font-size: 1.25em;
border: 1px solid #E0E0E0;
padding: 10px;
margin: 10px 0px 10px 0px;
h3 {
  font-family: 'Montserrat', sans-serif;
  text-align: center; 
}
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}
li {
  font-size: .90em;
  margin-top: 5px;
}
`;

export const LoginSection = styled.section`
  font-family: sans-serif;  
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #E0E0E0;
  padding-bottom: 10px;
  margin-top: 15px;
  h2 {
    font-family: 'Montserrat', sans-serif; 
  }
  input {
    border: 1px solid #E0E0E0;
    margin: 5px;
  }
  button {
    border: 1px solid #E0E0E0;
    padding: 8px;
    border-radius: 25px;
    margin-top: 5px;
  }
`;

export const HumsByUserSection = styled.section`
font-family: sans-serif;
border: 1px solid gray;
padding-top: 10px;
h3 {
  font-family: 'Montserrat', sans-serif; 
  text-align: center;
}
div {
  border-bottom: 1px solid gray;
  padding: 15px;
  margin-bottom: 5px;
}
`;
