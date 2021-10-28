import firebase from 'firebase'
import fbConfig from '../../config/fbCOnfig'

const initState = {
    orders: [
        {name: '',
        price: 0}
    ]
}

const orderReducer = (state = initState, action) => {

switch(action.type) {
    case 'CREATE_ORDER':
        console.log('created order', action.project)
        return state;
    case 'CREATE_ORDER_ERROR':
            console.log('created order', action.err);
            return state;
    default: 
    var allOrders = []
    fbConfig.firestore().collection('orders').get().then(Snap => {
        Snap.docs.forEach(document => {
          console.log('pushed data')
           allOrders.push(document.data());
        })
      })
        state.orders = allOrders;
    return state;
}
}

export default orderReducer