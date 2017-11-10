import React from 'react'
import Nav from '../../Nav'
import './assets/styles/BaseLayout.css'

const BaseLayout = (props) => (
  <div className='app-container'>
    <div className='app'>
      <Nav />
      <div className='content'>
        {props.children}
      </div>
    </div>
  </div>
)

export default BaseLayout
