import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button} from "react-bootstrap";

class AddPerson extends Component{
    state = {
        name : null,
        lastName : null,
        age : null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPerson(this.state);
    }
    render(){
        return(
            <div class="container">
            <div class="form-row">
                <form  onSubmit={this.handleSubmit}>                   
                    <Form.Control type="text" placeholder="Name" id="name" onChange={this.handleChange}/>
                    <Form.Control type="text" placeholder="Last-Name" id="lastName" onChange={this.handleChange}/>
                    <Form.Control type="text" placeholder="Age" id="age" onChange={this.handleChange}/>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </form>
                </div>
            </div>
        )
    }
}

export default AddPerson;