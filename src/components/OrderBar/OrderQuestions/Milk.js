import React from 'react'

function whenChecked() {
    console.log("this was checked")
}


export default function Milk() {
    return (
        <div>
            <div className="question">What type of Milk would you like?</div>
            <input type="radio" value="2%" name="milk" checked="checked" onChange={whenChecked}></input> 2%
            <input type="radio" value="Skim" name="milk" onChange={whenChecked}></input> Skim
            <input type="radio" value="Soy" name="milk" onChange={whenChecked}></input> Soy
        </div>
    )
}


