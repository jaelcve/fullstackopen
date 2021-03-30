import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [getName, searchByName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    const hasDuplicates = persons.some(person => person.name === newName);

    hasDuplicates ? alert(`${newName} is already added to phonebook`) :
      setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const personsToShow = getName ?
    persons.filter(person => person.name.toUpperCase().indexOf(getName.toUpperCase()) !== -1) :
    persons;

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchNameChange = (event) => {
    searchByName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={getName} handleChange={handleSearchNameChange} text="filter shown with" />
  
      <h3>add a new</h3>

      <PersonForm handleSubmit={addPerson} name={newName} 
      number={newNumber} handleNamechange={handleNewNameChange}
      handleNumberChange={handleNewNumberChange} />
      
      <h3>Numbers</h3>

      <Persons persons={personsToShow} />
    </div>
  )
}

export default App