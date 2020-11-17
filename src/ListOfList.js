import React from 'react';
import List from './List';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import './List.css';

class ListOfList extends React.Component {

	render() {
		let lists = [];
		let data = this.props.data
		for (var i = 0; i < data.length ; i++) {
			console.log(data[i]);
			let list = data[i]['list'];
			let heading = data[i]['heading'];
			lists.push(
				<List data={list} heading={heading}/>
			)
		}
		let lgClassName = "Lg";
		if (this.props.scrollable)
			lgClassName = "LgScrollable";
		return (
			<Container className="ListOfList">
				<ListGroup className={lgClassName} scrollable={this.props.scrollable}>
					{lists}
				</ListGroup>
			</Container>
		)
	}

	modify() {
		console.log("ListOfList modify");
	}

}

export default ListOfList;