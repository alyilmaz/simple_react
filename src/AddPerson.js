import React, {Component} from 'react'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                   <label htmlFor='name'>Name</label>
                   <input type="text" id="name" onChange={this.handleChange} /> 
                   <label htmlFor='name'>LastName</label>
                   <input type="text" id="lastName" onChange={this.handleChange} /> 
                   <label htmlFor='name'>Age</label>
                   <input type="text" id="age" onChange={this.handleChange} /> 
                   <button>Submit</button> 
                </form>
            </div>
        )
    }
}

export default AddPerson;