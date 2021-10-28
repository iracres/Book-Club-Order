import React from 'react'

import Size from './OrderQuestions/Size'
import Milk from './OrderQuestions/Milk'
import WhippedCream from './OrderQuestions/WhippedCream'

function HotChocolate() {

    return (
        <div>
            <h1>Hot Chocolate</h1>
            <Size />
            <Milk />
            <WhippedCream />
        </div>
    )
}

export default HotChocolate