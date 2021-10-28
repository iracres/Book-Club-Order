import React from 'react'

function whenChecked() {
    console.log("this was checked")
}


export default function WhippedCream()
{
    return(
        <div>
            <div className="question">Would you like whipped cream? </div> 
            <input type="radio" value="yes" name="whip" checked="checked" onChange={ whenChecked }></input>Yes
            <input type="radio" value="no"  name="whip" onChange={ whenChecked }></input>No
            <input type="radio" value="maamaa"  name="whip" onChange={ whenChecked }></input>Just a little!
        </div> 
    )
}

