import React from 'react';
import styled from 'styled-components';

const CardContent = styled.div`
    display: flex;
    font-family: 'Blinker', sans-serif;
    align-items: center;
`
const Name = styled.div`
    box-sizing: border-box;
    padding-left: 5%;
`
const Info = styled.div`
    margin: 0 auto;
    font-size: 1rem;
`

export default function Char(props){
    return <CardContent>
        <Name>
            <h1>{props.name}</h1>
        </Name>
        <Info>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Eye Color: {props.eye_color}</p> 
        </Info>       
    </CardContent>
}