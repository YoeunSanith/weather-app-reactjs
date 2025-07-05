import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import WeatherDetails from './WeatherDetails'
import { formatDate } from '../utils/helpers'

function WeatherCard() {
  const { weather } = useContext(WeatherContext)
  
  if (!weather) return null
  
  const { name, sys, main, weather: weatherInfo } = weather
  const weatherIcon = weatherInfo[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h3 className="mb-0">{name}, {sys.country}</h3>
        <span>{formatDate(new Date())}</span>
      </div>
      
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <img 
            src={iconUrl} 
            alt={weatherInfo[0].description} 
            className="weather-icon me-3"
          />
          <div className="text-center">
            <h2 className="temperature">{Math.round(main.temp)}°C</h2>
            <p className="weather-description text-capitalize">
              {weatherInfo[0].description}
            </p>
          </div>
        </div>
        
        <WeatherDetails />
      </div>
    </div>
  )
}

export default WeatherCard