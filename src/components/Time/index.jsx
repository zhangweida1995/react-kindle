import React, { Component } from 'react'
import './index.css'
import utils from '../../utils'
let chineseDate = utils.getChineseDate()
export default class Time extends Component {
    state = {
        date: new Date()
    }
    timer = null
    componentDidMount() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    formatter = (str) => {
        return str.replace(/\//g, '-')
    }
    getLocalDate = () => {
        const { date } = this.state
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${year}年${month}月${day}日`
    }
    getWeek = (day) => {
        const weekEnum = {
            0: '星期日',
            1: '星期一',
            2: '星期二',
            3: '星期三',
            4: '星期四',
            5: '星期五',
            6: '星期六',
        }
        return weekEnum[day]
    }
    render() {
        const { date } = this.state
        return (
            <div className='time-wrap'>
                <h2 className='date-week'>
                    {this.getLocalDate()}
                    &nbsp;
                    &nbsp;
                    {this.getWeek(date.getDay())}
                </h2>
                <h4>
                    <span>{chineseDate.g}</span>&nbsp;
                    <span>{chineseDate.a}</span>&nbsp;
                    <span>{chineseDate.m}</span>
                    <span>{chineseDate.d}</span>
                </h4>
                <h1 className='time'>{date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
