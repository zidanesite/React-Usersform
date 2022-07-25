import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import AddUsersform from './components/AddUsersform';
import AllUsers from './components/AllUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [user, setUser] = useState([
    {
      name: "Alaric",
      email: "Alaric@email.com",
      gen: 55,
    },

    {
      name: "Z-world",
      email: "Z-world@hit.com",
      gen: 89,
    },
  ]);
  const AddNewUser = (users) => {
    setUser([
      ...user,
      { name: users.name, email: users.email, gen: users.gen },
    ]);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <AddUsersform retrieve={AddNewUser}/>
          </Col>

          <Col md={6}>
            <AllUsers userData={user}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
