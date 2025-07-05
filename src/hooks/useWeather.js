import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

/**
 * Custom hook to access weather data and functions
 * @returns {Object} Weather context values and functions
 */
const useWeather = () => {
  const context = useContext(WeatherContext)
  
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  
  return context
}

export default useWeather