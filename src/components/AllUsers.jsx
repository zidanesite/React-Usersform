import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";
import { connect, useSelector } from "react-redux";

function AllUsers(props) {
	const { users } = useSelector((state) => {
		return state;
	});
	return (
		<Container>
			<Row>
				{users.map((item) => {
					return (
						<User
							key={item.id}
							userBio={item}
							delete={props.delete}
							editUser={props.editUser}
						/>
					);
				})}
			</Row>
		</Container>
	);
}

const mapState = (state) => {
	return {
		users: state.users,
	};
};
export default connect(mapState)(AllUsers);

// export default AllUsers;