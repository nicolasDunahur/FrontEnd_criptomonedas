import { Container, Jumbotron  } from 'react-bootstrap';
import React from 'react';

const Header = () => {

    return (
        <Jumbotron fluid
            style= {
            {
                height: "150px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }
            }>
        <Container>
          <h1>CriptoConsultora</h1>
          <p> Asesoramiento en criptomonedas </p>
        </Container>
        </Jumbotron>
    );
}

export default Header;