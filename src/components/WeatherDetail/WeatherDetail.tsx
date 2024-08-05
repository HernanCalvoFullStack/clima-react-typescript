import { formatTeperature } from "../../helpers"
import { Weather } from "../../hooks/useWeather"
import styles from "./WeatherDetail.module.css"

type WeatherDetailProps = {
    weather: Weather
}

const WeatherDetail = ({weather} : WeatherDetailProps) => {
  return (
    <div className={styles.container}>
        <h2>Clima de: <span className={styles.color}>{weather.name}</span></h2>
        <p className={styles.current}>{formatTeperature(weather.main.temp).toFixed(2)}&deg;C</p>
        <div className={styles.temperatures}>
            <p>Min: <span>{formatTeperature(weather.main.temp_min).toFixed(1)}&deg;C</span></p>
            <p>Máx: <span>{formatTeperature(weather.main.temp_max).toFixed(1)}&deg;C</span></p>
        </div>
    </div>
  )
}

export default WeatherDetail