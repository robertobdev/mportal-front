import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainStory from './components/MainStory';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainStory src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
      </div>
    );
  }
}

export default App;
