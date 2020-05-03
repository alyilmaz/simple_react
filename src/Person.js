import React from 'react';
import './Person.css'
import { Form, Button, ListGroup, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Person = ({people, deletePerson}) =>{   
    //console.log(this.props)
    const personList = people.map(person =>{
        return(
            <div className="person" key ={person.id}>
                <div>Name: {person.name}</div>
                <div>LastName: {person.lastName}</div>
                <div>Age: {person.age}</div>
                <Button variant="primary" type="submit" onClick={()=>{deletePerson(person.id)}}>
                    Delete
                </Button>
            </div>
        )
    })
    return(
        
        <ListGroup>
            <ListGroup.Item>
                {personList}
            </ListGroup.Item>           
        </ListGroup>
        
    )

}

export default Person;