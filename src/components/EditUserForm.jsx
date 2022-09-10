import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions/userActions";

function EditUserForm(props) {
	const [name, setName] = useState(props.userBio.name);
	const [gen, setGen] = useState(props.userBio.gen);
	const [email, setEmail] = useState(props.userBio.email);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		// props.editUser(props.userBio.id, { name, email, gen });
		// props.editUser(props.userInfo.id, { name, email, gen });
		let userInfo = { id: props.userInfo.id, name, email, gen };
		dispatch(updateUser(userInfo));
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

export default EditUserForm;