import React from 'react'
import Person from './Person';

function NameList(){
    const names = ['Gouse','Shahid','Sohail','Salma']
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id : 1,
            name : 'Gouse',
            age : 35,
            skill : 'Java'
        },
        {
            id : 2,
            name : 'Sohail',
            age : 7,
            skill : 'CPP'
        },
        {
            id : 3,
            name : 'Shahid',
            age : 11,
            skill : 'Python'
        },
        {
            id : 4,
            name : 'Salma',
            age : 30,
            skill : 'Scala'
        }
    ]
    //const personList = persons.map(person => <h2>{person.id} - {person.name} - {person.age} - {person.skill}</h2>)
    const personList = persons.map(p => <Person key={p.id} person={p}/>)
    //return <div><h2>{names[0]}</h2><h2>{names[1]}</h2><h2>{names[2]}</h2><h2>{names[3]}</h2></div>
    // return <div>{
    //     names.map(name=><h2>{name}</h2>)
    // }</div>
    //return <div>{names.map(name => <h2>{name}</h2>)}</div>
    return <div>{personList}</div>
}
export default NameList