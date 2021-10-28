import React from 'react'

import Size from './OrderQuestions/Size'
import Milk from './OrderQuestions/Milk'

function Latte() {

    return(
        <div>
        <h1>Latte</h1> 
        <Size />
        <Milk />
        </div> 
    )
}

export default Latte