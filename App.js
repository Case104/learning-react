import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(){
		super();
		this.state = { txt: 'this is the state text'}
		this.update = this.update.bind(this)
	}

	update(e){
		this.setState({txt: e.target.value})
	}

  render(){
  	let txt = this.state.txt
    return (
    	<div>
    		<Widget txt={txt} update={this.update} />
    	</div>
    );
  }
}

const Widget = (props) => {
 return (
		<div>
			<input type='text'
			onChange={props.update} />
			<h1>{props.txt}</h1>
		</div>
	);
}

export default App