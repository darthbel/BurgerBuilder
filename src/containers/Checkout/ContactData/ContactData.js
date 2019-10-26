import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler(event) {
    event.preventDefault()

    //alert('You continue!')
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Felipe',
        address: {
          street: '321 Rock Street',
          zipCode: 'H5J K9I',
          country: 'Canada'
        },
        email: 'felipe123@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false })
      })
  }

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Your Email'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Your Street'
        />
        <input
          className={classes.Input}
          type='text'
          name='postal'
          placeholder='Your Postal Code'
        />
        <Button btnType='Success' clicked={e => this.orderHandler(e)}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
