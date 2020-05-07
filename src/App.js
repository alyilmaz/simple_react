import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Person from './Person';
import AddPerson from './AddPerson';
import Navbar from "./Navbar";
import Home from './Home';
import Contact from './Contact';

class App extends Component {
  state = {
    people : [
      {name:"Alice", lastName:"Brown", age:"30", id:1},
      {name:"Bob", lastName:"Green", age:"20", id:2},
      {name:"Carlie", lastName:"Yellow", age:"40", id:3}
    ]
  }

  addingPerson = (person)=>{
    person.id = Math.random();
    let personData = [...this.state.people, person];
    this.setState({
      people : personData
    })
  }

  deletingPerson = (id) =>{
    let dataPerson = this.state.people.filter(person =>{
      return person.id !== id
    });
    this.setState({
      people:dataPerson
    })
  }
  
  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(){
    console.log('component updated');
  }

  render(){
    return (
      <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Route path='/home' component={Home}/>
          <Route path='/contact' component={Contact}/>
        </BrowserRouter>
        <h2>React Project</h2>
        <Person deletePerson={this.deletingPerson} people={this.state.people}/>
        <AddPerson  addPerson={this.addingPerson}/>
      </div>
    );
  }

}

export default App;
