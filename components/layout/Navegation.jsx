import React,{useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {FirebaseContext} from '../../firebase';


const Nav=styled.nav`
    padding-left:2rem;

    a{
        font-size:1.8rem;
        margin-left:2rem;

        &:last-of-type{
            margin-right:0;
        }
    }
`;

const Navigation = () => {
    const {usuario}=useContext(FirebaseContext);

    return ( 

    <Nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                {usuario? ( <Link href="/nuevo-tweet">
                <a>Nuevo Tweet</a>
                </Link>) :(null)}
               

                <Link href="/nosotros">
                    <a>Nosotros</a>
                </Link>
 
    </Nav>

     );
}
 
export default Navigation;