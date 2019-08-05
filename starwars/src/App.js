import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import Char from './components/Char';

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const StyledH1 = styled.h1`
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-start;
`
const Title = styled.div`
  font-family: 'Blinker', sans-serif;
  line-height: 0;
  margin-bottom: 9%;
`
const StyledH2 = styled.h2`
  font-size: 6rem;
  color: #F5EF2E;
  text-shadow: 2px 2px black;
`
const StyledH3 = styled.h3`
  font-size: 3rem;
`

const Card = styled.div`
  width: 25%;
  height: 50%;
  margin: 0 auto;
  margin-bottom: 5%;
  display: inline-block;

  border: 1px solid #000;
  box-shadow: 10px 10px 10px #383834;
  transform-style: preserve-3d;
  transition: 0.4s;

  &:hover{
    transform: rotatey(-180deg);

  }
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.\
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data.results);
      setData(res.data.results);
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  return (
    <div className="App">
      <StyledH1 className="Header">React Wars</StyledH1>
      <Title>
        <StyledH2>STARWARS</StyledH2>
        <StyledH3>About the Characters</StyledH3>
      </Title>
      <CardContainer>
        {data.map((char, index) => {
          return <Card>
          <Char name={char.name}
          key={index}
          src={char.films}
          birth_year={char.birth_year}
          gender={char.gender}
          height={char.height}
          eye_color={char.eye_color}
          />
          </Card>
        })};
      </CardContainer>
      </div>
    );
  }

export default App;
