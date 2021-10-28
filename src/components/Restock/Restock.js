import React, { Component } from 'react';
// import firebase from 'firebase';

import StockItems from "./layout/StockData.js";
import Stock from "./layout/Stock.js";
import NavStock from "./layout/NavStock";



class Restock extends Component {

    constructor() {
        super()
        this.state = {
            items: StockItems
        }
        this.InStock = this.InStock.bind(this)
        this.OutStock = this.OutStock.bind(this)
        this.restockAll = this.restockAll.bind(this)
        this.EspressoDown = this.EspressoDown.bind(this)
        this.LowStock = this.LowStock.bind(this)

    }

    //   state = {
    //     email: '',
    //     password: '',
    //     user: {id: '',
    //       name: '',
    //       email: ''},
    //   menue: this.props.order,
    //   firestore: firebase.firestore()
    //   }

    handlChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            user: { name: this.state.email, email: this.state.email, id: this.state.password }
        })
    }


    OutStock(id) {
        this.setState(prevState => {
            const updated = prevState.items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        colorButton: "red",
                        stockStatus: false,
                        lowStatus: false
                    }
                }
                return item
            })

            return {
                items: updated
            }
        })
    }


    LowStock(id) {
        this.setState(prevState => {
            const updated = prevState.items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        colorButton: "yellow",
                        stockStatus: true,
                        lowStatus: true
                    }
                }
                return item
            })

            return {
                items: updated
            }
        })
    }


    InStock(id) {
        this.setState(prevState => {
            const updated = prevState.items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        colorButton: "green",
                        stockStatus: true,
                        lowStatus: false
                    }
                }
                return item
            })

            return {
                items: updated
            }
        })
    }


    EspressoDown() {
        this.setState(prevState => {
            const updated = prevState.items.map(item => {
                if (item.espressoDep) {
                    return {
                        ...item,
                        colorButton: "red",
                        stockStatus: false,
                        lowStatus: false
                    }
                }
                return item
            })

            return {
                items: updated
            }
        })
    }

    restockAll() {
        this.setState(prevState => {
            const updated = prevState.items.map(item => {
                return {
                    ...item,
                    colorButton: "green",
                    stockStatus: true,
                    lowStatus: false
                }
            })

            return {
                items: updated
            }
        })
    }
    render() {
        const theItems = this.state.items.map(item => <Stock key={item.id} item={item} InStock={this.InStock} OutStock={this.OutStock} LowStock={this.LowStock} />)

        console.log(this.state)
        console.log(this.props)
        return (
            <div className="Restock">
                <NavStock restockAll={this.restockAll} EspressoDown={this.EspressoDown} />
                {theItems}
            </div>
        );
    }
}

// const mapUserToProps = (state) => {
//     var allOrders = []
//     firebase.firestore().collection('orders').get().then(Snap => {
//         Snap.docs.forEach(document => {
//             console.log('pushed data')
//             allOrders.push(document.data());
//         })
//     })
//     return {
//         auth: state.auth.user,
//         order: allOrders
//     }
// }

export default Restock;