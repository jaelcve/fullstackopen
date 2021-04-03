import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import servicePersons from './services/persons'
import RemovePerson from './components/RemovePerson'


const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [getName, searchByName] = useState('')

  useEffect(() => {
    servicePersons.getAll()
      .then(initialPersons =>
        setPersons(initialPersons))
      .catch(error => {
        alert(
          'Could not initialize Persons'
        )
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    const hasDuplicates = persons.some(person => person.name === newName);

    if (personObject.name.length === 0 || personObject.number.length === 0) {
      alert('Please enter a name and phone number')
    } else {
      if (hasDuplicates) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
          updatePerson(personObject)
      } else {
        createPerson(personObject)
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const createPerson = (personObject) => {
    servicePersons.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      }).catch(error => {
        alert(
          'Something went wrong when adding a Person'
        )
      })
  }

  const updatePerson = (personObject) => {
    const updatePerson = persons.find(person => person.name === personObject.name);
    servicePersons.update(updatePerson.id, personObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== updatePerson.id ? person : returnedPerson))
      })
      .catch(error => {
        alert('Could not update Person')
        setPersons(persons.filter(person => person.id !== personObject.id))
      })
  }

  const removePerson = personDel => {
    if (window.confirm(`Delete ${personDel.name} ?`)) {
      servicePersons.remove(personDel.id)
        .then(returnedPerson => {
          if (returnedPerson)
            setPersons(persons.filter(person => person.id !== personDel.id));
        }).catch(error => {
          alert('Error while deleting')
        })
    }
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

      {personsToShow.map(person =>
        <span key={person.name}>
          <Persons person={person} />
          <RemovePerson person={person} handleClick={() => removePerson(person)} />
        </span>
      )}

    </div>
  )
}

export default App