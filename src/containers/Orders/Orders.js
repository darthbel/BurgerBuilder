import React, { Component } from 'react'
import axios from '../../axios-order'
import Order from '../../components/Order/Order'
import WithErrorHandler from '../../components/WithErrorHandler/WithErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key })
        }
        this.setState({ loading: false, orders: fetchedOrders })
      })
      .catch(this.setState({ loading: false }))
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    )
  }
}

export default WithErrorHandler(Orders, axios)
