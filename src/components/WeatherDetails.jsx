import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

function WeatherDetails() {
  const { weather } = useContext(WeatherContext)
  
  if (!weather) return null
  
  const { main, wind, sys } = weather
  
  return (
    <div className="weather-details mt-4">
      <div className="row g-3">
        <div className="col-sm-6">
          <div className="detail-card p-3 bg-light rounded">
            <div className="detail-label">Feels Like</div>
            <div className="detail-value">{Math.round(main.feels_like)}°C</div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="detail-card p-3 bg-light rounded">
            <div className="detail-label">Humidity</div>
            <div className="detail-value">{main.humidity}%</div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="detail-card p-3 bg-light rounded">
            <div className="detail-label">Wind Speed</div>
            <div className="detail-value">{wind.speed} m/s</div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="detail-card p-3 bg-light rounded">
            <div className="detail-label">Pressure</div>
            <div className="detail-value">{main.pressure} hPa</div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="detail-card p-3 bg-light rounded">
            <div className="detail-label">Min Temp</div>
            <div className="detail-value">{Math.round(main.temp_min)}°C</div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="detail-card p-3 bg-light rounded">
            <div className="detail-label">Max Temp</div>
            <div className="detail-value">{Math.round(main.temp_max)}°C</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails