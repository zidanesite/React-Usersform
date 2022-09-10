import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AddNewUser } from "../actions/userActions";
import { connect, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [gen, setGen] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		// props.newUser({ name, gen, email });
		let userInfo = { id: uuid(), name, email, gen };

		// props.AddNewUser(userInfo);
		//function to dispatch the action to the store use the useDispatch hook
		dispatch(AddNewUser(userInfo));
		// console.log(userInfo);
		setName("");
		setGen("");
		setEmail("");
	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Gen</Form.Label>
					<Form.Control
						type="text"
						placeholder="Password"
						value={gen}
						onChange={(e) => {
							setGen(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

const mapDispatchToProps = {
	AddNewUser,
};
export default connect(null, mapDispatchToProps)(AddUserForm);

// export default AddUserForm;