import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
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

function HumsByUser() {
  return (
    <Section>
      <h3>hums by you!</h3>
      <div>
        <p>Hum hum hum. bother. bother. bother.</p>
      </div>
      <div>
        <p>Hum hum hum. bother. bother. bother.</p>
      </div>
      <div>
        <p>Hum hum hum. bother. bother. bother.</p>
      </div>
    </Section>
  );
}

export default HumsByUser;
