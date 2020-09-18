import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Dashboard from './components/Dashboard';
import NewPet from './components/NewPet';
import PetDetail from './components/PetDetail';
import EditPet from './components/EditPet';

function App() {
  return (
    <>
      <h1>Pet Shelter</h1>
      <Router>
        <Dashboard path="/"/>
        <NewPet path="/new" />
        <PetDetail path="/pet/:id" />
        <EditPet path="/pet/:id/edit" />
      </Router>
    </>
  );
}

export default App;
