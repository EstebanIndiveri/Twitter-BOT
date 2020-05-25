import React, { Fragment,useContext } from 'react';
import Headroom from 'react-headroom';
import Navegation from '../Navegation';
import Link from 'next/link';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import Button from '../../ui/Botton';
import {FirebaseContext} from '../../../firebase';

const Heading=styled.div`
    padding:1rem 0;
    background-color: var(--blueback);

    img{
        width: 40px;
        margin-right: 20px;
    }

    h1{
        color:#FFF;
    }
`;

const ContenedorHeader=styled.div`
  max-width:1200px;
  width:95%;
  margin:0 auto;

  @media(min-width:768px){
    display:flex;
    justify-content:space-between;
  }
`;

const Header = () => {

    const{usuario,firebase}=useContext(FirebaseContext);

    return ( 
        <Heading className="header">
             <Headroom style={{
                  background:'var(--blueback)',
                 transition: 'all .5s ease-in-out',
               }}>
             
            <h1 css={css`
              text-align:center;
              padding:0;
              padding:0;
            `}>Tweets simulator <img src="/static/img/twitter-logo.png" alt="logo" /></h1>

               <ContenedorHeader>

                 <div css={css`
                  display:flex;
                  align-items:center;
                 `}>
                   
                   <Navegation/>
                   </div>
                   <div css={css`
                  display:flex;
                  align-items:center;
                 `}>
                  {usuario?(          
                    <Fragment>
                      <p 
                      css={css`
                      margin-right:2rem;
                      color:#FFF;
                      `}>Hola: {usuario.displayName}</p>
                      <Button 
                      onClick={()=>firebase.cerrarSesion()}
                      >Cerrar Sesión</Button>
                      </Fragment>
                  ):(
                    <Fragment>

                      <Link href="/crear-cuenta"><Button bgColor="true">Crear Cuenta</Button></Link>
                      
                      <Link href="/login">
                      <Button  bgColor="true">Login</Button>
                      </Link>

                    </Fragment>
                  )}
                  </div>
               </ContenedorHeader>
             </Headroom>
        </Heading>
     );
}
 
export default Header;