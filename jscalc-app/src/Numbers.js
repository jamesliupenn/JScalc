import React, {Component} from 'react';
import { Badge, Button, Container, Row, Col } from 'reactstrap';
import './Numbers.css';
import Display from './Display';


class Numbers extends Component {
	constructor (props) {
		super(props);
		this.state = {selected: []};
		this.temp = "";
		this.display = "";
		this.onNumClick = this.onNumClick.bind(this);
		this.onOpsClick = this.onOpsClick.bind(this);
		this.onClrClick = this.onClrClick.bind(this);
		this.onEqlClick = this.onEqlClick.bind(this);
	}

	onNumClick(selected) {
		this.temp += selected;
		const length = this.state.selected.length;
		// Set limits on how many digits this calculator accepts
		if (length < 10) {
			this.state.selected.push(selected);
			// Update display to show the selected numbers
			this.display = this.state.selected;
		}
		this.setState({selected:[...this.state.selected]});
	}

	onOpsClick(selected) {
		this.temp += selected;
		this.setState({selected: []});
	}

	onClrClick() {
		this.setState(() => {
			return this.state.selected = [];
		});
		this.setState(() => {
			return this.display = "0";
		});
		this.setState(() => {
			return this.temp = "";
		});
	}

	onEqlClick() {
		// Update the display with the evaluated string of calculation
		this.setState(() => {
			return this.display = eval(this.temp);
		});
	}

	render() {
		return (
			<div className="row justify-content-center">
			<div className="display">{this.display}</div>
			<Container>
				<div><button className="button" onClick={() => this.onNumClick(7)}>7</button></div>
				<div><button className="button" onClick={() => this.onNumClick(8)}>8</button></div>
				<div><button className="button" onClick={() => this.onNumClick(9)}>9</button></div>
				<div><button className="button" onClick={() => this.onOpsClick("/")}>&divide;</button></div>
				<div><button className="button" onClick={() => this.onNumClick(4)}>4</button></div>
				<div><button className="button" onClick={() => this.onNumClick(5)}>5</button></div>
				<div><button className="button" onClick={() => this.onNumClick(6)}>6</button></div>
				<div><button className="button" onClick={() => this.onOpsClick("*")}>&times;</button></div>
				<div><button className="button" onClick={() => this.onNumClick(1)}>1</button></div>
				<div><button className="button" onClick={() => this.onNumClick(2)}>2</button></div>
				<div><button className="button" onClick={() => this.onNumClick(3)}>3</button></div>
				<div><button className="button" onClick={() => this.onOpsClick("-")}>&#8722;</button></div>
				<div><button className="button" onClick={() => this.onNumClick(0)}>0</button></div>
				<div><button className="button" onClick={() => this.onClrClick()}>c</button></div>
				<div><button className="button" onClick={() => this.onEqlClick()}>&#61;</button></div>
				<div><button className="button" onClick={() => this.onOpsClick("+")}>&#43;</button></div>
			</Container>
			</div>
		);
	}
}
export default Numbers;