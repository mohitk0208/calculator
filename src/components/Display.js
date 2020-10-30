import React from 'react'

import "./Display.css"
import Expression from './displayComponents/Expression'
import { Result } from './displayComponents/Result'

function Display() {
    return (
        <div className="display-container">
            <Expression />
            <Result />
        </div>
    )
}

export default Display
