import React, { Fragment ,useEffect, useState, useContext} from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';
import {FirebaseContext} from '../firebase';
import DetallesProducto from '../components/layout/DetallesProducto';
import {css}from '@emotion/core';
import Footer from '../components/layout/Footer';


export default function Home() {
  const [tweets,guardarTweets]=useState([]);
  const{firebase,usuario}=useContext(FirebaseContext);

  useEffect(()=>{
    const obtenerTweets=()=>{
      firebase.db.collection('productos').orderBy('creado','desc').onSnapshot(manejarSnapShot)
    }
    obtenerTweets();
  },[])

  function manejarSnapShot(snapshot){
    const tweets=snapshot.docs.map(doc=>{
      return{
        id:doc.id,
        ...doc.data()
      }
    });
      guardarTweets(tweets);
  }

  return (
    <div>
        <Layout>
          <div className="listado-productos">
            <div className="contenedor">
              {usuario?(
                <ul className="bg-white">
                {tweets.map(tweet=>(
                  <DetallesProducto
                  key={tweet.id}
                  tweet={tweet}
                />
                ))}
              </ul>
              ):(
                <Fragment>
                  <div css={css`
                  width:100%;
                  color:#FFF;
                  height:100%;
                  `}>
                    <div><img css={css`box-shadow: 8px 5px 9px 3px black; border-radius:10px; display: block;margin:auto`} src="/static/img/insight.png"/></div>
                    <h1 css={css`text-align:center;`}>Bienvenido a Bot Twitter</h1>
                    <h3>¿Qué puedes hacer con este bot?</h3>
                    <p css={css`padding-bottom:2rem;`}>El Bot Tweet es un bot automatizado con el cual puedes crear tu propio bot Registrandote de manera gratuita el mismo tomara un tweet que hayas creado de manera aleatoria y lo enviará en cada interacción que tenga con otro usuario de Tweeter.</p>
                    <h3>¿Como puedo crear mi bot?</h3>
                    <p>!Es facil! Tan solo debes registrarte poner un nombre para tu bot y ya estará listo para utilizar.</p>

                  </div>
                </Fragment>
              )}
              
            </div>
          </div>
        </Layout>
        <Footer/>
    </div>
    
  )
}
