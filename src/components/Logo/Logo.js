import React from 'react'
import LogoImg from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={LogoImg} alt='MyBurger' />
  </div>
)

export default Logo
