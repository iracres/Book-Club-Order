import React from 'react'
import Button from '@material-ui/core/Button'

import './Style.css'
import HotChocolate from './HotChocolate'
//import Latte from './Latte'


export default function OrderBar() {

    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className="navbar">
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            Welcome to the Book Club!!
    </header>
    )
}

function Main(props) {

    return (
        <main className="main">
            <div> <HotChocolate /> </div>
            <Button className="BarButton" variant="contained" id="button"> Add to Cart </Button>
            <Button className="BarButton" variant="contained" id="button"> Check out </Button>
        </main>

    )
}

function Footer() {
    return (
        <footer>
            Sup brahski this is my foot lmaooooooo
        </footer>
    )
}
