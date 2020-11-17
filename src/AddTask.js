import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddTask extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
		if ( !props.task===undefined )
			this.state = props.task
		// this.state = {
		// 	"description": task.description,
		// 	"expectedHours": task.expected_hours,
		// 	"status": task.status,
		// };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		let a = 1;
	}
	
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="formBasicDescription">
					<Form.Label>Description</Form.Label>
					<Form.Control 
						type="Text" 
						placeholder="be specific"
						name="description"
						value={this.state.description} 
						onChange={this.handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Expected Hours</Form.Label>
					<Form.Control 
						type="number" 
						step="0.1" 
						placeholder="0.0"
						name="expectedHours"
						value={this.state.expectedHours} 
						onChange={this.handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicStatus">
					<Form.Label>Status</Form.Label>
					<Form.Control 
						as="select" 
						name="status"
						value={this.state.status}
						onChange={this.handleInputChange}
					>
						<option>TODO</option>
						<option>DONE</option>
						<option>IGNORE</option>
				    </Form.Control>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}

}

export default AddTask;