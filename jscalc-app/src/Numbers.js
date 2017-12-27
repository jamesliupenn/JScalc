import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Numbers extends Component {
	render() {
		return (
			<table>
				<tr>
					<td><Button outline color="primary" size="lg">7</Button></td>
					<td><Button outline color="primary" size="lg">8</Button></td>
					<td><Button outline color="primary" size="lg">9</Button></td>
				</tr>
				<tr>
					<td><Button outline color="primary" size="lg">4</Button></td>
					<td><Button outline color="primary" size="lg">5</Button></td>
					<td><Button outline color="primary" size="lg">6</Button></td>
				</tr>
				<tr>
					<td><Button outline color="primary" size="lg">1</Button></td>
					<td><Button outline color="primary" size="lg">2</Button></td>
					<td><Button outline color="primary" size="lg">3</Button></td>
				</tr>
				<tr>
					<td colspan="3"><Button outline color="primary" size="lg">0</Button>
</td>
				</tr>
			</table>
		);
	}
}
export default Numbers;