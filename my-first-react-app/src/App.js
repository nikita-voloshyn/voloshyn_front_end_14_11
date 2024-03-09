import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
