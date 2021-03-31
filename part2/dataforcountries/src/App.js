import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'
import SearchCountries from './components/SearchCountries'


function App() {

  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  }


  return (
    <div>
      <SearchCountries country={country}
        handleCountryChange={handleCountryChange} />
      <DisplayCountries countries={countries} 
      filterCountry={country} />
    </div>
  );
}

export default App;
