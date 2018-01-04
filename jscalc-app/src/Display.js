import React, {Component} from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';

class Display extends Component {
	render() {
		return (
			<div className="row justify-content-center">
			<Container>
				<Row>
					<Col sm={{ size: 6, offset: 3}}>
						<FormGroup>
							<Input type="textarea" name="text" id="exampleText" />
						</FormGroup>
					</Col>
				</Row>
			</Container>
			</div>
		);
	}
}

export default Display;
