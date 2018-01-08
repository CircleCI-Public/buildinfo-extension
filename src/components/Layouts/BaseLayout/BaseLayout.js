import React from 'react'
import Nav from '../../Nav'
import styles from './assets/styles/BaseLayout.css'

const BaseLayout = (props) => (
  <div className={styles['app-container']}>
    <div className={styles['app']}>
      <Nav />
      <div className={styles['content']}>
        {props.children}
      </div>
    </div>
  </div>
)

export default BaseLayout
