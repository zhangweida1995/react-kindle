import React, { Component } from 'react'
import './index.css'
export default class Weather extends Component {
    state = {
        positionApi: 'http://www.nmc.cn/rest/position',
        weatherApi: 'http://www.nmc.cn/rest/weather',
        data: null
    }
    timeStamp = () => new Date().getTime()
    componentDidMount() {
        fetch(`${this.state.positionApi}?_=${this.timeStamp()}`)
            .then(res => res.json())
            .then(res => {
                this.getWeather(res.code)
            })
    }
    getWeather = (stationid) => {
        fetch(`${this.state.weatherApi}?stationid=${stationid}&_=${this.timeStamp()}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.data.predict)
                this.setState({ data: res.data.predict })
            })
    }
    transfer = (dayWeather, nightWeather) => {
        if (dayWeather && nightWeather) {
            return dayWeather === nightWeather ? dayWeather : `${dayWeather}转${nightWeather}`
        }
        return dayWeather || nightWeather
    }
    render() {
        if (this.state.data) {
            const { data } = this.state
            const { data: { detail } } = this.state
            const currentDay = Array.isArray(detail) && detail[0] ? detail[0] : {}
            const { day, night } = currentDay
            return (
                <div className='weather-wrap'>
                    <div className='weather'>
                        <h1>{
                            this.transfer(day.weather.info, night.weather.info)
                        }</h1>
                    </div>
                    <div className='temperature'>
                        {day.weather.temperature}°C ~ {night.weather.temperature}°C
                    </div>
                    <div className='wind'>
                        {day.wind.direct} {day.wind.power}
                    </div>
                    <div className='station'>
                        <h4>{data.station.province}•{data.station.city}</h4>
                    </div>
                    <div className='divider'></div>
                </div>
            )
        }

    }

}
