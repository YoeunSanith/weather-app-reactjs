import { useState, useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

function SearchBar() {
  const [city, setCity] = useState('')
  const { searchWeather, getWeatherByLocation, loading } = useContext(WeatherContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    searchWeather(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          aria-label="City name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={loading}
        />
        <button 
          className="btn btn-primary" 
          type="submit"
          disabled={loading}
        >
          Search
        </button>
      </div>
      <div className="d-grid">
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={getWeatherByLocation}
          disabled={loading}
        >
          <i className="bi bi-geo-alt"></i> Use My Location
        </button>
      </div>
    </form>
  )
}

export default SearchBar