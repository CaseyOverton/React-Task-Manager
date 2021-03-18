import React, { Component } from 'react'
import AnalogClock from 'r-analog-clock'


class Clock extends Component{
    render(){
        return (
            <div className="clock">
                <AnalogClock 
                    size="350"
                    handType="line"
                    showShadow="true"
                    scaleType="roman"       
                    borderColor="teal" 
                    backgroundColor="black"
                    secondHandColor="MediumSlateBlue" 
                    hourColor="lightsteelblue" 
                    minuteHandColor="palevioletred"
                    scaleColor="mediumaquamarine"
                    />
            </div>
        )
    }
}

export default Clock