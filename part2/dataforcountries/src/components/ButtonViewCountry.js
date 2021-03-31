import React, { useState } from 'react'
import DisplayCountryInfo from './DisplayCountryInfo'


const ButtonViewCountry = ({ country }) => {

    const [isShow, setShow] = useState(false)

    let btnText = isShow ? 'hide' : 'show'

    if (isShow === false) {
        return (
            <span>
                <button onClick={() => setShow(!isShow)}>{btnText}</button>
            </span>
        )
    }

    return (
        <span>
            <button onClick={() => setShow(!isShow)}>{btnText}</button>
            <div>
                <DisplayCountryInfo country={country} />
            </div>
        </span>
    )
}

export default ButtonViewCountry