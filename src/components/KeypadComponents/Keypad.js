import React from 'react'
import Add from './functionKeys/Add'
import Backspace from './functionKeys/Backspace'
import Clear from './functionKeys/Clear'
import Divide from './functionKeys/Divide'
import Equals from './functionKeys/Equals'
import Multiply from './functionKeys/Multiply'
import Percent from './functionKeys/Percent'
import Subtract from './functionKeys/Subtract'
import KeyBase from './KeyBase'

import "./Keypad.css"
const Keypad = () => {
    return (
        <div className="keypad-container">
            <Clear />
            <Percent />
            <Backspace />
            <Divide />
            <KeyBase value={"7"} />
            <KeyBase value={"8"} />
            <KeyBase value={"9"} />
            <Multiply />
            <KeyBase value={"4"} />
            <KeyBase value={"5"} />
            <KeyBase value={"6"} />
            <Subtract />
            <KeyBase value={"1"} />
            <KeyBase value={"2"} />
            <KeyBase value={"3"} />
            <Add />
            <KeyBase value={"00"} />
            <KeyBase value={"0"} />
            <KeyBase value={"."} />
            <Equals />
        </div>
    )
}

export default Keypad
