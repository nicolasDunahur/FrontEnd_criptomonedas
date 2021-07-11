import { Container, Jumbotron  } from 'react-bootstrap';
import React from 'react';




const Header = ({titulo, subtitulo}) => {

    return (
        <Jumbotron fluid
            style= {
            {
                height: "150px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }
            }>
        <Container>
          <h1>{titulo}</h1>
          <p> {subtitulo} </p>
        </Container>
        </Jumbotron>
    );
}

export default Header;