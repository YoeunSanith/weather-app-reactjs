import { createContext, useState, useCallback } from 'react'
import { fetchCurrentWeather, fetchWeatherByCoords } from '../services/weatherApi'

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  // Search for weather by city name
  const searchWeather = useCallback(async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }
    
    setLoading(true)
    setError(null)
    
    try {
      const data = await fetchCurrentWeather(city)
      setWeather(data)
    } catch (err) {
      setError(err.message || 'City not found. Please try again.')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }, [])
  
  // Get weather for user's current location
  const getWeatherByLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }
    
    setLoading(true)
    setError(null)
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          const data = await fetchWeatherByCoords(latitude, longitude)
          setWeather(data)
        } catch (err) {
          setError(err.message || 'Failed to get weather for your location')
          setWeather(null)
        } finally {
          setLoading(false)
        }
      },
      (err) => {
        setError('Unable to access your location. Please enable location services.')
        setLoading(false)
      }
    )
  }, [])
  
  return (
    <WeatherContext.Provider 
      value={{ 
        weather, 
        loading, 
        error, 
        searchWeather,
        getWeatherByLocation
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}