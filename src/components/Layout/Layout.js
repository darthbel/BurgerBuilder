import React, { Fragment } from 'react'

const Layout = props => (
  <Fragment>
    <div>Toolbarm SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Fragment>
)

export default Layout
