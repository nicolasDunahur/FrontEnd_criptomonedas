import { Fragment, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Consulta from './components/Consulta';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Botonera from './components/Botonera';
import Spinner from './components/Spinner';



function App() {

  const [consulta, setConsulta] = useState({});


  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);
  const { cotizacion, datos } = resumen;

  const [realizarConsulta, setrealizarConsulta] = useState(false);

  return (
    <Fragment>
      <Container>

        <Header></Header>

        <Botonera
          setConsulta={setConsulta}
          setrealizarConsulta={setrealizarConsulta}
        />
        

        <Consulta
          consulta={consulta}
          realizarConsulta={realizarConsulta}
        />

        {
          (realizarConsulta === false)
            ? (<p></p>)
            : (
              <Card style={{ backgroundColor: '#A9A9A9' }} >
                <Card.Title style={{ alignSelf: 'center', fontsize: 'larger' }}>Cotiza nuestros servicios</Card.Title>
                <Formulario
                  guardarResumen={guardarResumen}
                  guardarCargando={guardarCargando}>
                </Formulario>
                {cargando ? <Spinner /> : null}
                <Resumen
                  datos={datos}
                />
                {
                  !cargando
                    ? <Resultado
                      cotizacion={cotizacion}
                    />
                    : null
                }
              </Card>

            )
        }

      </Container>
    </Fragment>
  );
}

export default App;
