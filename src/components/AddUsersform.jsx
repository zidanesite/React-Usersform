import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddUsersform(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.retrieve({ name, email, gen });
  };
  return (
    <div>
        <h1>AddUsersform</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Zidane" 
            className="w-50"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Zidane@email.com" 
            className="w-50"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="55" 
            className="w-50" 
            value={gen}
            name="gen"
            onChange={(e) => {
              setGen(e.target.value);
            }}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
    </div>
  )
}

export default AddUsersform