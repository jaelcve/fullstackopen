import React from 'react'

const PersonForm = ({handleSubmit, name, number, handleNamechange, handleNumberChange}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input value={name}
            onChange={handleNamechange} />
        </div>
        <div>
          number: <input value={number}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

    )
}

export default PersonForm