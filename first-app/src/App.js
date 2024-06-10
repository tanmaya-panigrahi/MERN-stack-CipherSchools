import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  name = "Tanmaya Panigrahi";
  render() {
    return (
      <>
        <div>
          <h1>this is {this.name}</h1>
        </div>
        <div>
          <p>
            This is a paragraph
          </p>
        </div>
      </>
    )
  }





}

export default App;
