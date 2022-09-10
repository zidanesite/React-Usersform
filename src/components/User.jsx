import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { connect, useDispatch } from "react-redux";
import { RemoveUser } from "../actions/userActions";

function User(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();

	const hadleDelete = (e) => {
		e.preventDefault();
		dispatch(RemoveUser(props.userInfo.id));
		// props.RemoveUser(props.userInfo.id);
		// e.preventDefault();
		// props.delete(props.userBio.id);
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditUserForm editUser={props.editUser} userBio={props.userBio} />
				</Modal.Body>
			</Modal>
			<Col md={3} style={{ width: "12rem", marginBottom: "10px" }}>
				<Card>
					<Card.Body>
						<Card.Title>Name:{props.userBio.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Email:{props.userBio.email}
						</Card.Subtitle>
						<Card.Text>Gen:{props.userBio.gen}</Card.Text>
						<Button href="#" size="sm" variant="primary" onClick={handleShow}>
							Edit
						</Button>
						<Button href="#" size="sm" variant="danger" onClick={hadleDelete}>
							Delete
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

const mapDispatchToProps = {
	RemoveUser,
};

export default connect(null, mapDispatchToProps) (User);