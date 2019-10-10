import React from 'react';
import styled from 'styled-components';

const CardContent = styled.div`
    display: flex;
    font-family: 'Blinker', sans-serif;
    justify-content: center;
`
const NameDiv = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    box-sizing: border-box;
    margin: 0 auto;
    z-index: 3;
    position: absolute;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding-top: 15%;

`
const Name = styled.h1`
    font-size: 2.7rem;
    display: block; 
    position: relative;
    margin: 0 auto; 
    color: #F5EF2E;
    text-shadow: 2px 2px darkgrey;
`
const Info = styled.div`
    font-size: 1.1rem;
    margin: 0 auto;
    z-index: 1;
    line-height: 1.3;
    transform: rotatey(-180deg);
    backface-visibility: hidden;
`

export default function Char(props){
    return <CardContent>
        <NameDiv>
            <Name>{props.name}</Name>
        </NameDiv>
        <Info>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Eye Color: {props.eye_color}</p> 
        </Info>       
    </CardContent>
}