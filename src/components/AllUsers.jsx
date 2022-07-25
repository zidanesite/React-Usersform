import React from 'react'
import Card from 'react-bootstrap/Card';

function AllUsers(props) {
  return (
    <div>
        <h1>Allusers</h1>
        {props.userData.map((user, index) =>{
          return(
            <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
              <Card.Text>
                How many time do you hit the jackpot?<br/>
                {user.gen} Times
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#" className="anotherlink">Another Link</Card.Link>
            </Card.Body>
          </Card>
          );
          })}
    </div>
  )
}

export default AllUsers