import React, { Fragment } from 'react';
import {Global,css} from '@emotion/core';
import Header from './Header';
import Head from 'next/head';
import Footer from './Footer';
const Layout = props => {
    return ( 
        <Fragment>
            <Global
                styles={css`
                    :root{
                        --blueback:rgb(21, 32, 43);
                        --formcolor:#8899AC;
                        --backinput:rgb(25, 39, 52);
                        --buttoninput:rgb(29, 161, 242);
                        --linkcolor:#1B95E0;
                        --linkhover:rgb(39, 128, 184);
                    }
                    html{
                        font-size:62.5%;
                        box-sizing:border-box;
                    }
                    *,*::before,*::after{
                        box-sizing:inherit;
                    }
                    body{
                        font-size:1.6rem;
                        line-height:1.5;
                        /* color:#FFF; */
                    }
                    h1,h2,h3{
                        margin: 0 0 2rem 0;
                        line-height:1.5;
                        font-family: 'Montserrat', sans-serif;
                    }
                    body{
                        font-family: 'Muli', sans-serif;
                    }
                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                    }
                    a{
                        text-decoration:none;
                        color:var(--linkcolor);
                        transition:color 300ms;
        
                        &:hover{
                            color:var(--linkhover);
                            transition:color 300ms;
                
                        }
                    }
                `}
            />
        <Head>
            <html lang="es"/>
            <title>Twitter BOT</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,900&family=Muli:wght@400;600&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="/static/css/app.css"/>
        </Head>
            
        <Header/>
        <main>
            {props.children}
        </main>
        </Fragment>
     );
}
 
export default Layout;