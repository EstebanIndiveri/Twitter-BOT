import React from 'react'
import {css} from '@emotion/core';
const Error404 = () => {
    return ( 
        <div css={css`
        height:100vh !important;
        `}>
        <h1
        css={css`
            margin-top:5rem;
            text-align:center;
        `}
        >No se puede mostrar</h1>

        
        </div>
     );
}
 
export default Error404;