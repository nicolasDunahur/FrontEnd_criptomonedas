import { Fragment, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Consulta from './components/Consulta';

function App() {

const [consulta, setConsulta] = useState({});

  const consultarAPI = async () => {
        try{
        const api = await fetch('https://api.n.exchange/en/api/v1/get_price/BTCUSD/');
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
          <h1 className= "titulo">
            Seleccione la criptomoneda que desea saber su estrategia
          </h1>
        </Col>
      </Row>
      
    <div
    style={
      {
        paddingTop:"100px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }
    }>
    <Row>
      <Col>
      <Button 
          variant="light"
          onClick={consultarAPI}
        >
        Dolar por bitcoin
      </Button>
      </Col>
      </Row>
      <Row>
        <Col>
        <Consulta
        consulta = {consulta}
        />
        </Col>
      </Row>
    </div>
    </Container>
    </Fragment>
  );
}

export default App;
