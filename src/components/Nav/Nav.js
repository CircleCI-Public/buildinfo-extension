import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { parseURL } from '../../utils'
import './assets/styles/Nav.css'

class Nav extends PureComponent {
  constructor(props) {
    super()
  }

  componentDidMount() {
    if (document.cookie) {
      this.props.setTokenValid(true)
      this.props.setTokenFetched(true)

      // fetch recent builds once on page mount
      let { orgName, repoName, buildNumber, vcsType } = parseURL(window.location.href).circle
      this.props.setVcsType(vcsType)
      this.props.setOrgName(orgName)
      this.props.setRepoName(repoName)
      this.props.setBuildNumber(buildNumber)
      console.log(orgName, repoName, buildNumber, vcsType)
      if (vcsType && orgName && repoName) {
        this.props.fetchRecentBuilds(vcsType, orgName, repoName)
      }

      // listen for history changes and update recent builds if needed
      this.props.history.listen((location, action) => {
        let url = window.location.origin + location.pathname
        console.log('history changed')
        let { orgName, repoName, buildNumber, vcsType } = parseURL(url).circle

        console.log(orgName, repoName, buildNumber, vcsType)

        vcsType ? this.props.setVcsType(vcsType) : console.log('no vcs')
        orgName ? this.props.setOrgName(orgName) : console.log('no org')
        repoName ? this.props.setRepoName(repoName) : console.log('no repo')
        buildNumber ? this.props.setBuildNumber(buildNumber) : console.log('no build num')

        if (vcsType && orgName && repoName) {
          this.props.fetchRecentBuilds(vcsType, orgName, repoName)
        }
      })

      window.addEventListener('load', () => {
        console.log('dom content loaded')
        let elems = document.getElementsByTagName('a')
        Array.from(elems)
        .filter(elem => (
          elem.hostname === 'circleci.com'
        ))
        .map(
          elem => elem.addEventListener('click', () => {
            console.log(elem.pathname, elem.href)
            this.props.history.push(elem.pathname)
            window.location = elem.href
          })
        )
      })
    }
  }

  render() {

    return (
      <nav className='bi-navbar'>
        BuildInfo
      </nav>
    )
  }
}

export default Nav
