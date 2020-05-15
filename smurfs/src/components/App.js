import React, { useState, useEffect  } from "react";
import "./App.css";

// imports
import axios from 'axios'
import SmurfForm from './components/SmurfForm';
import SmurfList from './components/SmurfList';
import { SmurfContext } from './contexts/SmurfContext';

// import styles 
import styled from 'styled-components'

const Village = styled.div`
  width: 400px;
  margin: auto;
`

const App = () => {
  const [smurfs, setSmurfs] = useState([])
  const addSmurf = newSmurf => {
    setSmurfs([...SmurfList, newSmurf]);
  }
  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res =>{
        console.log(res.data)
        setSmurfs(res.data)
      })
  }, [])
  
  
      return (
        <SmurfContext.Provider value={{addSmurf, smurfs}}>
        <Village>
        
        <SmurfList/>
        <SmurfForm/>
  
        </Village>
        </SmurfContext.Provider>
      );
    
  }

export default App;
