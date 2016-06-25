import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

App.defaultProps = {
	txt: 'This is default text'
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

ReactDOM.render(
	<App cat={5} txt='This overwrites the default props' />, 
	document.getElementById('app')
);