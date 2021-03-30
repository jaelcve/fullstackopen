import React from 'react'

const Filter = ({handleChange, name, text}) => {
    return (
        <div>
        {text}: <input value={name}
          onChange={handleChange} />
      </div>
    )
}

export default Filter