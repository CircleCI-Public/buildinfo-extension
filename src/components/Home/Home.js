import React, { Component } from 'react'
import styles from './assets/styles/Home.css'
import { parseURL } from '../../utils'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  fetchInfo = (event) => {
    event.preventDefault()

    let { orgName, repoName, buildNumber, vcsType } = parseURL(this.props.buildURL).circle
    this.props.setVcsType(vcsType)
    this.props.setOrgName(orgName)
    this.props.setRepoName(repoName)
    this.props.setBuildNumber(buildNumber)
    this.props.fetchRecentBuilds(vcsType, orgName, repoName)
  }

  render () {
    return (
        <div className={styles['starter-template']}>
          <h1>CircleCI BuildInfo</h1>
        </div>
    )
  }
}

export default App
