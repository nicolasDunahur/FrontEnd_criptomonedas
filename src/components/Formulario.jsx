import React, { useState } from "react";
import styled from "@emotion/styled";
import { calcularMonto, obtenerRiesgo } from "../helper";
import { Button } from "react-bootstrap";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const Input = styled.input`
  margin: 0 1rem;
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContenedorFormulario = styled.div`
  background-color: #A9A9A9;
  padding: 3rem;
`;

const Formulario = ({ guardarResumen, guardarCargando }) => {
  const [datos, guardarDatos] = useState({
    monto: "",
    plazo: "",
    riesgo: "",
  });

  const [error, guardarError] = useState(false);

  const { monto, plazo, riesgo } = datos;

  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = (e) => {
    e.preventDefault();

    if (monto.trim() === "" || plazo.trim() === "" || riesgo.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    let resultado = 2000;

    resultado -= (plazo * 3 * resultado) / 100;

    resultado = calcularMonto(monto) * resultado;

    const incrementoRiesgo = obtenerRiesgo(riesgo);
    resultado = parseFloat(incrementoRiesgo * resultado).toFixed(2);

    guardarCargando(true);
    setTimeout(() => {
      guardarCargando(false);
      guardarResumen({
        cotizacion: resultado,
        datos,
      });
    }, 2000);
  };

  return (
    <ContenedorFormulario>
      <form onSubmit={cotizarSeguro}>
        {error ? <Error>Todos los campos deben completarse</Error> : null}
        <Campo>
          <Label>Monto:</Label>
          <Select name="monto" value={monto} onChange={obtenerInformacion}>
            <option value=""> -- Seleccione -- </option>
            <option value="mucho">Más de 5000 mil dolares</option>
            <option value="medio">Entre 1000 y 5000 dolares</option>
            <option value="poco">Menos de 1000 dolares</option>
          </Select>
        </Campo>
        <Campo>
          <Label>Año:</Label>
          <Select name="plazo" value={plazo} onChange={obtenerInformacion}>
            <option value="">-- Seleccione --</option>
            <option value="3">Más de 5 años</option>
            <option value="2">Menos de 5 años</option>
            <option value="1">Menos de 2 años</option>
            <option value="0">Menos de 6 meses</option>
          </Select>
        </Campo>
        <Campo>
          <Label>Riesgo:</Label>
          <Input
            type="radio"
            name="riesgo"
            value="poco"
            checked={riesgo === "poco"}
            onChange={obtenerInformacion}
          />
          Poco riesgo
          <Input
            type="radio"
            name="riesgo"
            value="mediano"
            checked={riesgo === "mediano"}
            onChange={obtenerInformacion}
          />
          Riesgo medio
        </Campo>
        <Button variant="primary" size="lg" block type="submit">
          Cotizar
        </Button>
      </form>
    </ContenedorFormulario>
  );
};

export default Formulario;
