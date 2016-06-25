import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
  	let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

export default App