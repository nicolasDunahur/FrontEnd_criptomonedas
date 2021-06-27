import { Fragment, useState } from 'react';
import { Container, Button, Row, Col, ButtonGroup, DropdownButton, Dropdown,Jumbotron  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Consulta from './components/Consulta';


function App() {

  const [consulta, setConsulta] = useState({});

  const consultarAPI = async (parDeMonedas) => {
    const uri = 'https://api.n.exchange/en/api/v1/get_price/'

    try {
      const api = await fetch(uri + parDeMonedas);
      // https://nexchange2.docs.apiary.io/#reference/0/get-price/get-price?console=1
      const consulta = await api.json();
      setConsulta(consulta);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container>
                <h1 className="titulo" >CriptoConsultas</h1>
                <p>
                  Consulta los ultimos resultados de los indicadores mundiales de criptomonedas
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
            <Col>
              <ButtonGroup horizontal >

                <Button>Cotiza nuestra asesoria</Button>

                <DropdownButton as={ButtonGroup} title="Valor de criptomonedas" id="bg-vertical-dropdown-1" align="left" >
                  <Dropdown.Item
                    eventKey="1" onClick={() => consultarAPI('BTCUSD/')} >Dolar por bitcoin</Dropdown.Item>
                  <Dropdown.Item eventKey="2" variant="light" onClick={() => consultarAPI('ETHUSD/')}>Ethereum por bitcoin</Dropdown.Item>
                  <Dropdown.Item eventKey="3" onClick={() => consultarAPI('LTCUSD/')} variant="light" >Litecoin por bitcoin</Dropdown.Item>

                </DropdownButton>
              </ButtonGroup>
            </Col>
          </Row>

        <div 
          style={
            {
              //paddingTop: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }
          }>

          <Row>
            <Col>
              <Consulta
                consulta={consulta}
              />
            </Col>
          </Row>

        </div>
      </Container>
    </Fragment>
  );
}

export default App;
