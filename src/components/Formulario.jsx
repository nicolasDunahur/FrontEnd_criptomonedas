import React, { useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../helper";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Card,
  Container
} from "react-bootstrap";

const Formulario = ({ guardarResumen, guardarCargando }) => {
  // Hago el state para leer el form
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, guardarError] = useState(false);

  const { marca, year, plan } = datos;

  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    let resultado = 2000;

    const diferencia = obtenerDiferenciaYear(year);

    resultado -= (diferencia * 3 * resultado) / 100;

    resultado = calcularMarca(marca) * resultado;

    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
  };

  return (
    <Card>
      <h1>Cotiza</h1>
      <Card.Body>
        <Form onSubmit={cotizarSeguro}>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              name="marca"
              value={marca}
              onChange={obtenerInformacion}
            >
              <option value="">-- Seleccione --</option>
              <option value="Americano">Americano</option>
              <option value="euro">euro</option>
              <option value="asiatico">asiatico</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Custom select Small</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              name="year"
              value={year}
              onChange={obtenerInformacion}
            >
              <option value="">-- Seleccione --</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </Form.Control>
          </Form.Group>

          <Form> <Row> Plan   
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Básico"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  value="basico"
                  //checked={plan === "basico"}
                  onChange={obtenerInformacion}
                />
                <Form.Check
                  inline
                  label="Completo"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  value="completo"
                  //checked={plan === "completo"}
                  onChange={obtenerInformacion}
                />
              </div>
            ))}
            </Row>
          </Form>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Cotizar</Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Formulario;
