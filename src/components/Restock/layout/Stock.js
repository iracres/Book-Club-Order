import React from "react"

function Stock(props) {
    return (
        <div style={{ border: "1px solid", padding: "10px", boxShadow: "2px 2px", width: "200px", height: "150px", float: "left", margin: "5px", background: props.item.colorButton }}>
            <p style={{ fontFamily: '"Times New Roman", Times, serif' }}>{props.item.text} <br /> Stock status: {(props.item.stockStatus).toString()} <br /> Low status: {(props.item.lowStatus).toString()}</p>
            <div style={{ margin: "20px" }}>
                <button onClick={() => props.InStock(props.item.id)}><i className="material-icons green" >check</i></button>
                <button onClick={() => props.LowStock(props.item.id)}><i className="material-icons yellow" >sentiment_neutral</i></button>
                <button onClick={() => props.OutStock(props.item.id)}><i className="material-icons red" >clear</i></button>
            </div>
        </div>
    )
}

export default Stock