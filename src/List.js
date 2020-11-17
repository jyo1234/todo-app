import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Btn from './Btn';
import './List.css';

class List extends React.Component {

	render() {
		let items = [];
		for (var i = 0; i < this.props.data.length ; i++) {
			items.push(
				<ListGroup.Item>
					{this.props.data[i]}
				</ListGroup.Item>
			)
		}
		let lgClassName = "Lg";
		if (this.props.scrollable)
			lgClassName = "LgScrollable";
		return (
			<Card className="List">
				<b>{this.props.heading}</b>
				<ListGroup className={lgClassName}>
					{items}
				</ListGroup>
				<Btn parentModify={this.props.parentModify}>
				</Btn>
			</Card>
		)
	}

}

export default List;
