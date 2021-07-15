import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from '@emotion/styled';


const ContenedorConsulta = styled.div`
    margin: "2rem",
    padding: "3rem",
    borderRadius: ".9rem",
    backgroundColor: '#E5E8E8',
    maxWidth: "800px",
    color: "black",
`;

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;


const Consulta = ({ consulta, realizarConsulta }) => {
  return (
    realizarConsulta === true ? (<p></p>) : (

    <ContenedorConsulta>
      <Mensaje> - ${consulta.price} - </Mensaje>
    </ContenedorConsulta>

  )
  )
};

export default Consulta;
