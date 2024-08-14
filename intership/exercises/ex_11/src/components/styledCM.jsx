import { styled } from 'styled-components'
export const Menu = styled.div`
width:300px;
height:100vh;
border-right:1px solid black;
display:flex;
flex-direction:column;
background:black;
position:fixed;
`
export const Table = styled.table`
width:600px;
background:rgb(118, 0, 236);
text-align:center;
position:relative;
top:50px;
border-collapse: collapse;
`
export const Close = styled.button`
    background-color:unset;
    font-size:48px;
    position:relative;
    margin-top:-1000px;
    border:unset;
    user-select: none;
    margin-left:1250px;
    border: unset;
    bottom:60px;
    `
export const ModalDiv = styled.div`
    user-select: none;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 90%;
    height: 300px;
    opacity:1;
    overflow: auto;
    text-align:center;
    background-color:rgb(100,0,255);
    border-radius:12px;
    position:fixed;
    z-index:1000;

`
export const Button = styled.button`
width:100%;
height:100px;
font-size:24px;
text-align:center;
background-color:unset;
border:unset;
color: rgb(118, 0, 236);
`
export const Form = styled.form`
width: 300px;
height: max-content;
font-size:16px;
padding: 50px;
box-shadow: 0px 0px 25px 0px rgb(0, 234, 255);
border-radius:8px;
display:flex;
flex-direction: column;
align-items:center;
jusitfy-content:center;
position:relative;
top:100px;
left:575px;

`
export const Input = styled.input`
width:75%;
font-size:16px;
height:20px;
margin:10px;
background:rgb(118, 0, 236);
border:unset;
border-radius:4px;
padding:5px;
`