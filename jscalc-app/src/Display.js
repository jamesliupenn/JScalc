import React, {Component} from 'react';
import './Display.css';


class Display extends Component {
	render() {
		return (
			<div className="row justify-content-center">
				<input type="text" name="display" id="display" disabled></input>
			</div>
		);
	}
}

export default Display;
