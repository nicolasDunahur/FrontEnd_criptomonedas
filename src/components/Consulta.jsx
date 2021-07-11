import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Consulta = ({ consulta }) => {

    return ( 
        <div style= {
            {
                margin: "1rem",
                padding: "3rem",
                borderRadius: ".9rem",
                backgroundColor: "#ffffff",
                maxWidth: "800px",
                color: "black"
            }
        }>
            
            <p> - ${consulta.price} - </p>
        </div>
     );
}
 
export default Consulta;