import React from 'react'
import classes from './Order.module.css'

const Order = () => (
  <div className={classes.Order}>
    <p>Ingredients: </p>
    <p>
      Price: <strong>$ 6.00</strong>
    </p>
  </div>
)

export default Order
