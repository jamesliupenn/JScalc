import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Plus extends Component {
	render() {
		return (
			<img src= {process.env.PUBLIC_URL + '004-add.png'} />
		);
	}
}

export default Plus;
