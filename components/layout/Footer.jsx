import React from 'react'
import {css} from '@emotion/core';
const Footer = () => {
    return ( 
        <div css={css`
            text-align:center;
            justify-content:space-between;
            display:flex;
            background-color:var(--backinput);
            color:#FFF;
            padding:0;
            margin:0;
            font-size:1.2rem;
        `}>
            <p>Creado por Esteban Indiveri</p>
            <p>Todos los derechos reservados</p>
        </div>
     );
}
 
export default Footer;