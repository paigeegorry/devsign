import styled from 'styled-components';

export const  HumDiv = styled.div`
  font-family: sans-serif;
  padding: 10px;
  margin: 5px;
  border: 1px solid #E0E0E0;
  img {
    position: relative;
    float: left;
    top: 0;
    height: 50px;
    width: 50px;
    border: 1px solid black;
    border-radius: 30px;
    padding: 5px;
    margin: 10px;
  }
  span {
    display: inline-block;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }
  @media (min-width: 800px) {
    width: 96vw;
    
  }
`;

export const FormDiv = styled.div`
font-family: sans-serif;
p {
  margin-top: 0;
  margin-bottom: 0;
}
form {
  display: flex;
  flex-direction: column;
  text-align: center;
  input {
    padding: 10px;
    border: 1px solid #808080;
    margin: 5px;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    width: 250px;
  }
  input:focus {
    border: 1px solid rgba(81, 203, 238, 1);
  }
  button {
    border: 1px solid rgba(81, 203, 238);
    width: 150px;
    border-radius: 25px;
    font-weight: bold;
    text-transform: lowercase;
    padding: 8px;
    align-self: center;
    margin-bottom: 10px;
  }
}
`;

export const Heading = styled.h2`
font-family: 'Montserrat', sans-serif;
text-align: center; 
border-top: 1px solid #E0E0E0;
padding-top: 25px;
`;
