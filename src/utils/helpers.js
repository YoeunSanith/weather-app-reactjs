/**
 * Format date to display day name and date
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }
    return date.toLocaleDateString('en-US', options)
  }
  
  /**
   * Convert wind direction in degrees to cardinal direction
   * @param {number} degrees - Wind direction in degrees
   * @returns {string} Cardinal direction
   */
  export const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.round(degrees / 45) % 8
    return directions[index]
  }
  
  /**
   * Get appropriate weather icon class based on weather condition and time
   * @param {string} icon - Weather icon code from API
   * @returns {string} CSS class for weather icon
   */
  export const getWeatherIconClass = (icon) => {
    const iconMap = {
      '01d': 'bi-sun',            // clear sky day
      '01n': 'bi-moon',           // clear sky night
      '02d': 'bi-cloud-sun',      // few clouds day
      '02n': 'bi-cloud-moon',     // few clouds night
      '03d': 'bi-cloud',          // scattered clouds
      '03n': 'bi-cloud',
      '04d': 'bi-clouds',         // broken clouds
      '04n': 'bi-clouds',
      '09d': 'bi-cloud-drizzle',  // shower rain
      '09n': 'bi-cloud-drizzle',
      '10d': 'bi-cloud-rain',     // rain
      '10n': 'bi-cloud-rain',
      '11d': 'bi-cloud-lightning', // thunderstorm
      '11n': 'bi-cloud-lightning',
      '13d': 'bi-snow',           // snow
      '13n': 'bi-snow',
      '50d': 'bi-cloud-fog',      // mist
      '50n': 'bi-cloud-fog'
    }
    
    return iconMap[icon] || 'bi-question-circle'
  }