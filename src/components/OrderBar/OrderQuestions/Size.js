import React from 'react'

function whenChecked() {
    console.log("this was checked")
}

export default function Size()
{
    return(
        <div>
        
            <div className="question">What size would you like?</div>
            <input type="radio" value="short"  name="size" onChange={ whenChecked }></input>Short
            <input type="radio" value="tall"   name="size" onChange={ whenChecked }></input>Tall
            <input type="radio" value="grande" name="size" onChange={ whenChecked }></input>Grande
        </div> 
    )
}
        