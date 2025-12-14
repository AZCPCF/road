import styled from "styled-components"

export const Body = styled.div`
    width: 90%;
    margin : 3% auto;
    padding : 100px;
    border : 3px solid yellow;
    border-radius:8px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    box-shadow:0px 0px 25px 0px yellow;
    `
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%
    `
export const ParentDiv = styled.div`
    width:max-content;
    border-radius:8px;
    border : 2px solid black;
    border-radius : 8px;
    padding-right : 30px;
    margin :25px;
    text-align:center;
    `
export const Img = styled.img`
    width:200px;
    height:175px;
    border-radius:8px;
    margin:10px 7.5%;
`
export const P = styled.p`
    padding-left:20px;
`
export const Span = styled.span`
text-align:center;
`
export const Button = styled.button`
    width:100px;
    height:40px;
    border-radius:8px;
    border:unset;
`
export const Form = styled.div`
    width:300px;
    padding:100px;
    margin:5% auto;
    background-color:blue;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow:0px 0px 25px 0px blue;
    border-radius:8px;
`
