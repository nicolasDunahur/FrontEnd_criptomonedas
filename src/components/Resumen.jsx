import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import {primeraMayuscula} from '../helper';

const ContenedorResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // Extrer datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '' ) return null;

    return ( 
        <ContenedorResumen>
             <h2>Resumen de cotización</h2>
                <ul>
                    <li>Marca: {primeraMayuscula(marca)}</li>
                    <li>Año: {year}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;