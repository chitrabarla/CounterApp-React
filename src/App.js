import React from 'react';
import First from './components/examples/FirstComponent';
import Counter from './components/counter/Counter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello
      <First/>
      {/*<Second/>*/}
      <Counter/>
    </div>
  );
}

function Second() {
    return (
    <div className="Second">
      Second
    </div>
  );
}
export default App;
/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}
export default App;


*/