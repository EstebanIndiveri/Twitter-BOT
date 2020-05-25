import styled from '@emotion/styled';

export const Formulario=styled.form`
    max-width:600px;
    width:95%;
    margin: 5rem auto 0 auto;

    fieldset{
        margin:2rem 0;
        border:1px solid #e1e1e1;
        font-size:1.5rem;
        padding:2rem;
    }
`;

export const Campo=styled.div`
    margin-bottom:2rem;
    display:flex;
    align-items:center;

    label{
        flex:0 0 150px;
        font-size:1.8rem;
        color:#8899AC;
    }

    input, 
    textarea{
        flex:1;
        padding:1rem;
    }
    input{
        background-color:var(--backinput);
        border-radius:5px;
        border:none;
        color:#FFF;
        
    }
    textarea{
        height:350px;
        max-width:400px;
    }
`;

export const InputSubmit=styled.input`
    background-color:var(--buttoninput);
    width:100%;
    padding:1.5rem;
    text-align:center;
    color:#FFF;
    font-size:1.8rem;
    text-transform:uppercase;
    border:none;
    font-family:'Source Sans Pro', sans-serif;
    font-weight:700;
    border-radius:10px;

    &:hover{
        cursor:pointer;
        opacity:0.8;
        transition:300ms;
    }
`;
export const Error=styled.p`
    background-color:#b13c3c;
    padding:1rem;
    font-family:'Montserrat',sans-serif;
    font-weight:600;
    font-size:1rem;
    color:#FFF;
    text-align:center;
    text-transform:uppercase;
    margin:2rem 0;
    opacity:0.7;
`;