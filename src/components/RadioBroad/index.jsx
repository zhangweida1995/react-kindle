import React, { Component } from 'react'
import sentence from './sentence'
export default class RadioBroad extends Component {
    render() {
        let index = Math.floor(Math.random() * sentence.length)
        return (
            <div style={{ padding: '0 20px' }}>
                {sentence[index]}
            </div>
        )
    }
}
