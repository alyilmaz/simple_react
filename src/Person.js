import React from 'react';
import './Person.css'

const Person = ({people, deletePerson}) =>{   
    //console.log(this.props)
    const personList = people.map(person =>{
        return(
            <div className="person" key ={person.id}>
                <div>Name: {person.name}</div>
                <div>LastName: {person.lastName}</div>
                <div>Age: {person.age}</div>
                <button onClick={()=>{deletePerson(person.id)}}>
                    Delete Person
                </button>
            </div>
        )
    })
    return(
        <div className="person-list">
            {personList}
        </div>
    )

}

export default Person;