import React,{useContext} from 'react';
import styled from '@emotion/styled';

import {css} from '@emotion/core';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es}from 'date-fns/locale';
import Link from 'next/link';



const Producto=styled.li`
padding:4rem;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #e1e1e1;

&:last-of-type{
    border:none;
}
`;
const Titulo=styled.a`
    font-size:2rem;
    font-weight:bold;
    margin:0;
    &:hover{
        cursor:pointer;
    }
`;
const TextoDescripcion=styled.p`
    font-size:1.6rem;
    margin:0;
    color:#888;
`;
const Comentarios=styled.div`
    margin-top:2rem;
    display:flex;
    align-items:center;

    div{
        display:flex;
        align-items:center;
        border:1px solid #e1e1e1;
        padding:.3rem 1rem;
        margin-right:2rem;
    }
    img{
        width:2rem;
        margin-right: 2rem;
    }
    p{
        font-size:1.6rem;
        margin-right:1rem;
        font-weight:600;
        &:last-of-type{
            margin:0;
        }
    }
`;
const Votos=styled.div`
    flex:0 0 auto;
    text-align:center;
    border:1px solid #e1e1e1;
    padding:1rem 3rem;
    div{
        font-size:2rem;
    }
    p{
        margin:0;
        font-size:2rem;
        font-weight:600;
    }
`;


const DescripcionProducto=styled.div`
flex:0 1 600px;
display:grid;
grid-template-columns:1fr 3fr;
column-gap:2rem;
`;

const Imagen=styled.img`
    width:200px;
`;

const DetalleProducto = ({tweet}) => {
    const{id,comentarios,creado,descripcion,nombre,url,urlimagen,votos}=tweet;

  
    return ( 
        <Producto>
       

            <DescripcionProducto>
                {urlimagen?(<div>
                    <Imagen src={urlimagen} alt="ImagenProducto"/>
                </div>):(<><div ><p css={css`text-align:center; font-size:3rem; width:200px;`}>Sin foto</p></div></>)}
                
                <div>
                    <Link href="/productos/[id]" as={`/productos/${id}`}>
                        <Titulo>{nombre}</Titulo>
                    </Link>
                        <TextoDescripcion>{descripcion}</TextoDescripcion>
                        {/* <Comentarios>
                            <div>
                                <img src="/static/img/comentario.png"/>
                                <p>{comentarios.length} Comentarios</p>
                            </div>
                        </Comentarios> */}
                        <p>Publicado hace: {formatDistanceToNow(new Date(creado),{locale:es})}</p>
                </div>
            </DescripcionProducto>
                        
                {url?(
                <Votos>
                    <div>Pagina web:</div>
                        <p><b>{url}</b></p>
                </Votos>)
            :(null)}
            
        </Producto>
     );
}
 
export default DetalleProducto;