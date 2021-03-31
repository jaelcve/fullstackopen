import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {

    const [weather, setWeather] = useState({})

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name}`)
            .then(response => {
                setWeather(response.data)
            })
    }, [])


    if (Object.keys(weather).length === 0) {
        return null
    }

    return (
        <div>
            <p><strong>temperature:</strong>{weather.current.temperature}</p>
            <img src={weather.current.weather_icons[0]} alt="weather" width="100" height="100"></img>
            <p><strong>wind:</strong>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )

}

export default Weather