import React,{useState,useContext} from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout'
import { Fragment } from 'react';
import Router,{useRouter} from 'next/router';
import {css} from'@emotion/core';
import {Formulario, Campo, InputSubmit, Error} from '../components/ui/Formulario';
import FileUploader from 'react-firebase-file-uploader';
import {FirebaseContext} from '../firebase';
import firebase from '../firebase';
//validation hook
import useValidation from '../Hooks/useValidation';
import validarCrearTweet from '../validation/validarCrearTweet';
import Error404 from '../components/layout/404';


export default function NuevoTweet() {
  const [nombreimagen,guardarNombre]=useState('');
  const [subiendo,guardarSubiendo]=useState(false);
  const [progreso,guardarProgreso]=useState(0);
  const [urlimagen,guardarUrlImagen]=useState('');

  const [error,guardarError]=useState(false);

  const STATE_INITIAL={
      nombre:'',
      //imagen:'',
      url:'',
      descripcion:''
  }
   const {
        valores,
        errores,
        handleSubmit,
        hanbleChange,
        handleBlur
    }=useValidation(STATE_INITIAL,validarCrearTweet,crearProducto)
    //hook del routing
    const router=useRouter();

    //context con las operaciones crud de firebase:
    const {usuario,firebase}=useContext(FirebaseContext);
    // console.log(usuario);
    function crearProducto(){
      //si el user no esta auth llega al log
      if(!usuario){
        return router.push('/login');
      }

      //creamos el objeto del nuevo producto:
      const producto={
        nombre,
        url,
        urlimagen,
        descripcion,
        votos:0,
        comentarios:[],
        creado:Date.now(),
        creador:{
          id:usuario.uid,
          nombre:usuario.displayName
        },
        haVotado:[]
      }
      //insertar en firebase
      firebase.db.collection('productos').add(producto);
      return router.push('/');
    }


    const handleUploadStart = () =>
    {
      guardarProgreso: (0);
      guardarSubiendo: (true);
    };
  const handleProgress = progreso => guardarProgreso ({progreso});
  const handleUploadError = error => {
    guardarSubiendo(error);
    console.error(error);
  };
  const handleUploadSuccess = nombre => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre)
    firebase
      .storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then(url=>{
        guardarUrlImagen(url);  
      });
  };


    const{nombre,imagen,url,descripcion}=valores;


return (
  <div css={css`
      background-color:rgb(27, 42, 56);
      height:100%;
      color:#FFF;
  `}>
      <Layout>
          {!usuario? <Error404/> : (
            
            <Fragment>
                <h1
                css={css`
                    text-align:center;
                    margin-top:5rem;
                `}
                >Nuevo Tweet</h1>
                <Formulario
                    onSubmit={handleSubmit}
                    noValidate
                >
                <p css={css`
                    text-align:center;
                    margin-top:5rem;
                `}>Guarda tus tweets que serán publicados de manera aleatoria cada vez que sea citado el bot con una imagen y url si lo necesitas</p>

                  <fieldset>
                    <legend>Información General</legend>
                  
                    <Campo>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre del tweet a guardar"
                        name="nombre"
                        value={nombre}
                        onChange={hanbleChange}
                        onBlur={handleBlur}
                        />
                    </Campo>
                    {errores.nombre &&<Error>{errores.nombre}</Error>}


                     <Campo>
                        <label htmlFor="imagen">Imagen</label>
                        <FileUploader
                        accept="image/*"
                        id="imagen"
                        name="imagen"
                        // value={imagen}
                        // onChange={hanbleChange}
                        // onBlur={handleBlur}
                        randomizeFilename
                        storageRef={firebase.storage.ref("productos")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                        />
                    </Campo>
                    {/* {errores.imagen &&<Error>{errores.imagen}</Error> */}

                    <Campo>
                        <label htmlFor="url">Sitio web</label>
                        <input
                        placeholder="Sitio web de tu producto. Ej:http://www.coffe.com"
                        type="url"
                        id="url"
                        name="url"
                        value={url}
                        onChange={hanbleChange}
                        onBlur={handleBlur}
                        />
                    </Campo>
                    {/* {errores.url &&<Error>{errores.url}</Error>} */}

                    </fieldset>
                    <fieldset>
                      <legend>Tu tweet</legend>

                      <Campo>
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea css={css`
                          background:var(--backinput);
                          color:#FFF;
                        `}
                        placeholder="Agrega lo que deseas tweetear"
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={hanbleChange}
                        onBlur={handleBlur}
                        />
                    </Campo>
                    {errores.descripcion &&<Error>{errores.descripcion}</Error>}
                    </fieldset>
                    {error && <Error>{error}</Error>}
                    <InputSubmit 
                    type="submit"
                    value="Crear Producto"
                    />
                </Formulario>
          </Fragment>
          )}
            
        </Layout>
  </div>
)
}
