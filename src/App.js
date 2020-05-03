import React, {Component} from 'react';
import Person from './Person';
import AddPerson from './AddPerson';

class App extends Component {
  state = {
    people : [
      {name:"Alice", lastName:"Brown", age:"30", id:1},
      {name:"Bob", lastName:"Green", age:"20", id:2},
      {name:"Carlie", lastName:"Yellow", age:"40", id:3}
    ]
  }

  addPerson = (person)=>{
    person.id = Math.random();
    let personData = [...this.state.people, person];
    this.setState({
      people : personData
    })
  }

  deletePerson = (id) =>{
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
        <h1>React Project</h1>
        <Person deletePerson={this.deletePerson} people={this.state.people}/>
        <AddPerson  addPerson={this.addPerson}/>
      </div>
    );
  }

}

export default App;
