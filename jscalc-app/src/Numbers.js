import React, {Component} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './Numbers.css';


class Numbers extends Component {
	constructor (props) {
		super(props);
		this.state = 0;
		this.onBtnClick = this.onBtnClick.bind(this);
	}


	onBtnClick(rSelected) {
		// console.log(rSelected);
	}

	render() {
		return (
			<div className="row justify-content-center">
			<Container>
			 <Row>
				<Col><button className="button other">c</button></Col>
				<Col><button className="button other">&#177;</button></Col>
				<Col><button className="button other">&#37;</button></Col>
				<Col><button className="button other">&divide;</button></Col>
			  </Row>
			  <Row>
				<Col><button className="button num">7</button></Col>
				<Col><button className="button num">8</button></Col>
				<Col><button className="button num">9</button></Col>
				<Col><button className="button other">&times;</button></Col>
			  </Row>
			  <Row>
				<Col><button className="button num">4</button></Col>
				<Col><button className="button num">5</button></Col>
				<Col><button className="button num">6</button></Col>
				<Col><button className="button other">&#8722;</button></Col>
			  </Row>
			  <Row>
				<Col><button className="button num">1</button></Col>
				<Col><button className="button num">2</button></Col>
				<Col><button className="button num">3</button></Col>
				<Col><button className="button other">&#43;</button></Col>
			  </Row>
			  <Row>
				<Col><button className="button zero num">0</button></Col>
				<Col><button className="button side">.</button></Col>
				<Col><button className="button side">&#61;</button></Col>
			  </Row>
			</Container>
			</div>
		);
	}
}
export default Numbers;