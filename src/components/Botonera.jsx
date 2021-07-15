import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button,  ButtonGroup, DropdownButton, Dropdown} from 'react-bootstrap';

const Botonera = ({ setConsulta, setrealizarConsulta }) => {

    const consultarAPI = async (parDeMonedas) => {
        const uri = 'https://api.n.exchange/en/api/v1/get_price/'
    
        try {
          const api = await fetch(uri+parDeMonedas);
          // https://nexchange2.docs.apiary.io/#reference/0/get-price/get-price?console=1
          const consulta = await api.json();
          setConsulta(consulta);
        } catch (error) {
          console.log(error);
        }
      };



    return ( 
        <ButtonGroup horizontal >

                <Button  onClick={() => 
                  setrealizarConsulta(true)}>Cotiza nuestra asesoria</Button>

                <DropdownButton as={ButtonGroup} 
                title="Valor de criptomonedas" id="bg-vertical-dropdown-1" align="left" onClick={() =>
                  setrealizarConsulta(false)} >
                  <Dropdown.Item
                    eventKey="1" onClick={() =>
                      
                      consultarAPI('BTCUSD/')
                    }
                    >Dolar por bitcoin</Dropdown.Item>

                  <Dropdown.Item eventKey="2" variant="light" onClick={() => consultarAPI('ETHUSD/')}>Ethereum por bitcoin</Dropdown.Item>
                  <Dropdown.Item eventKey="3" onClick={() => consultarAPI('LTCUSD/')} variant="light" >Litecoin por bitcoin</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
     );
}
 
export default Botonera