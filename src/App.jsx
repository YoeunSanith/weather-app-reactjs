import { useContext } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import LoadingSpinner from './components/LoadingSpinner'
import { WeatherContext } from './context/WeatherContext'

function App() {
  const { weather, loading, error } = useContext(WeatherContext)

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="text-center mb-4">🌤 Weather App</h1>
          <SearchBar />
          
          {loading && <LoadingSpinner />}
          
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}
          
          {weather && !loading && <WeatherCard />}
        </div>
      </div>
    </div>
  )
}

export default App