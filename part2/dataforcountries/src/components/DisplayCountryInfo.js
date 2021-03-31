import React from 'react'
import Weather from './Weather'

const DisplayCountryInfo = ({ country }) => {

    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(language =>
                    <li key={language.name}>
                        {language.name}
                    </li>
                )}
            </ul>
            <img src={country.flag} alt="flag" width="100" height="100"></img>
            <h3>Weather in {country.name}</h3>
            <Weather country={country} />
        </div>

    )

}


export default DisplayCountryInfo