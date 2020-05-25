import styled from '@emotion/styled';

const Botton=styled.a`
    font-weight:600;
    text-transform:uppercase;
    border:1px solid #8899AC;
    padding: 1rem;
    margin-right:1rem;
    line-height:center;
    background-color:${props=>props.bgColor?"rgb(29, 161, 242)":'white'};
    color:${props=>props.bgColor?"#FFF":"rgb(29, 161, 242)"};
    border-radius:10px;
    &:last-of-type{
        margin-right:0;
    }
    &:hover{
        cursor:pointer;
    }

`;
export default Botton;