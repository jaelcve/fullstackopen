import React from 'react'
import DisplayCountryInfo from './DisplayCountryInfo'
import ButtonViewCountry from './ButtonViewCountry'

const DisplayCountries = ({ countries, filterCountry }) => {

    const filteredCountries = filterCountry ?
        countries.filter(country => country.name.toLowerCase().includes(filterCountry.toLowerCase())) :
        countries;

    if (filteredCountries === countries) {
        return null
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return (
            <div>
                {filteredCountries.map(country =>
                    <div key={country.alpha2Code}>
                        {country.name}
                        <ButtonViewCountry country={country} />
                    </div>)}
            </div>
        )
    } else if (filteredCountries.length === 1) {

        return (
            <div>
                <DisplayCountryInfo country={filteredCountries[0]} />
            </div>
        )
    } else {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
}

export default DisplayCountries