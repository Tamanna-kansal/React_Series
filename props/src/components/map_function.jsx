import React from "react";

function Mapp() {
    // const names = ['Bruce', 'Cruce', 'Diana'];
    // const namelist = names.map(name => <h2>{name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        }
        ,
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        }
        , {
            id: 3,
            name: 'Diana',
            age: 34,
            skill: 'Vue'
        }
    ]
    const namelist = persons.map(person => <h2>{person.name}.I am {person.age} years old.</h2>)
    return (
        <div>{namelist}</div>
    )
}


export default Mapp;