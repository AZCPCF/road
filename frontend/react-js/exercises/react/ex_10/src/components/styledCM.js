import styled from "styled-components"
export const ProductsCM = styled.div`
width: 90%;
padding : 50px 0px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin : 2% auto;
box-shadow:0px 0px 50px 0px blue;
display: grid;
border-radius:8px;
color:black;
grid-template-columns: 50% 50%;
user-select: none;
`
export const Product = styled.div`
width:90%;
height:600px;
margin : 10px auto;
background-color:yellow;
text-align:center;
border-radius:4px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
`
export const P = styled.p`
padding:0 20px;
`
export const Buy = styled.a`
width:30%;
height:40px;
text-align:center;
line-height:40px;
background:blue;
border:unset;
border-radius:4px;
`
export const Img = styled.div`
width:300px;
height:300px;
border-radius:8px;
line-height:100px;   
background-size: cover;
`
export const ULParent = styled.div`
display:flex;
justofy-content:center;
margin:75px 68%;
`
export const UL = styled.ul`
display:flex;
list-style:none;
`
export const LI = styled.a`
width:50px;
height:50px;
background:blue;
text-align:center;
line-height:50px;
text-decoration: solid;
border-radius:100%;
margin:10px;
color:white;
`