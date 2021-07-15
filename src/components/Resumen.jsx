import styled from '@emotion/styled';


const ContenedorResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {monto, plazo, riesgo} = datos;

    if(monto === '' || plazo === '' || riesgo === '' ) return null;

    return ( 
        <ContenedorResumen>
             <h1>Resumen de cotización</h1>
                <ul>
                    <h3>Monto: {monto}</h3>
                    <h3>Plazo: {plazo}</h3>
                    <h3>Riesgo: {riesgo}</h3>
                </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;