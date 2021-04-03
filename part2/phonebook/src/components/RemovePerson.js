import React from 'react'

const RemovePerson = ({handleClick}) =>{
    return (
        <span>
            <button onClick={handleClick}>
                delete
            </button>
        </span>
    )
}

export default RemovePerson