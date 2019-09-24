import React, { Component } from 'react';
import foods from './foods.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodBox from './components/FoodBox.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox foods={foods} />
      </div>
    );
  }
}

export default App;
