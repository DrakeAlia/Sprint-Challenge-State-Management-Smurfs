import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";

// imports
import {fetchSmurf} from '../actions/action';
import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';


const App= ({fetchSmurf})=> {

  useEffect(() => {
      fetchSmurf();
    }, [fetchSmurf]);


    return (
      <div className="App">
        <h1>SMURFS LAND V2!!!!</h1>
        <div>Welcome to Drake's Second Attempted!!</div>
        <div>Become a Smurf Today and Have fun!</div>
          <SmurfCard />
          <SmurfForm />
      </div>
    );
  };
  const mapStateToProps = state => {
    return {
      message: state.message,
      smurfs: state.smurfs
    };
  };

  export default connect(
    mapStateToProps,
    { fetchSmurf }
  )(App);