import React from 'react'

const SearchCountries = ({ country, handleCountryChange }) => {
    return (
        <div>
            find countries <input value={country}
                onChange={handleCountryChange}></input>
        </div>
    )
}

export default SearchCountries