import React, { PureComponent } from 'react'
import moment from 'moment'
import SimpleMetaRow from './components/SimpleMetaRow'
import MetaRow from './components/MetaRow'
import Steps from './components/steps/Steps'
import StepCount from './components/steps/StepCount'
import TimestampMetaRow from './components/TimestampMetaRow'
import styles from './assets/styles/MetaView.styl'

class MetaView extends PureComponent {
  
  constructor() {
    super()

    this.state = {
      filterActive: false,
      filterInput: '',
      filterItems: [], 
    }
  }
  

  filterInput = (e) => {
    this.setState({
      filterActive: e.target.value.length > 0,
      filterInput: e.target.value,
      filterItems: e.target.value.split(',').filter(item => item.trim() != '')
    })
  }

  filterCheck = (keys : Array) => {
    if (this.state.filterActive) {
      //console.log(this.state.filterItems)
      return !keys.some(key => {
        //console.log(key)
        return this.state.filterItems.some(item => {
          //console.log(`${key} includes ${item}: ${key.includes(item.toLowerCase().trim())}`)
          return key.includes(item.toLowerCase().trim())
        })
      })
    } else {
      return false
    }
  }

  render() {

    let { 
      diffBuildA,
      diffBuildB,
      } = this.props

    let {
      filterCheck 
    } = this

    let rows = [
      //identities
      {property: ['username'], label: 'username', section: 'identities'},
      {property: ['committer_name'], label: 'committer name', section: 'identities'},
      {property: ['committer_email'], label: 'committer email', section: 'identities'},
      {property: ['authro_email'], label: 'author email', section: 'identities'},
      {property: ['owners'], label: 'owners', section: 'identities', json: true},
      {property: ['vcs_type'], label: 'vcs type', section: 'identities'},
      //jobs
      {property: ['platform'], label: 'platform', section: 'jobs'},
      {property: ['fail_reason'], label: 'fail reason', section: 'jobs'},
      {property: ['retries'], label: 'retries', section: 'jobs'},
      {property: ['canceler'], label: 'canceler', section: 'jobs', json: true},
      {property: ['parallel'], label: 'parallel', section: 'jobs'},
      {property: ['build_time'], label: 'build time', section: 'jobs'},
      {property: ['timed out'], label: 'timed out', section: 'jobs'},
      {property: ['why'], label: 'why', section: 'jobs'},
      {property: ['lifecycle'], label: 'lifecycle', section: 'jobs'},
      {property: ['build parameters'], label: 'build parameters', section: 'jobs', json: true},
      //Build Agent
      {property: ['picard', 'build_agent', 'image'], label: 'image', section: 'build_agent'},
      {property: ['picard', 'build_agent', 'properties', 'build_agent'], label: 'build agent', section: 'build_agent'},
      {property: ['picard', 'build_agent', 'properties', 'executor'], label: 'executor', section: 'build_agent'},
      //Resource Class
      {property: ['picard', 'resource_class', 'cpu'], label: 'cpu', section: 'resource_class'},
      {property: ['picard', 'resource_class', 'ram'], label: 'ram', section: 'resource_class'},
      {property: ['picard', 'resource_class', 'class'], label: 'class', section: 'resource_class'},
      //Steps
      {property: ['steps'], label: 'count', section: 'steps'},
      {property: ['steps'], label: 'names', section: 'steps'},
      //Timestamps
      {property: ['usage_queued_at'], label: 'usage queued at', section: 'timestamps'},
      {property: ['start_time'], label: 'start time', section: 'timestamps'},
      {property: ['stop_time'], label: 'stop time', section: 'timestamps'},
      //Git
      {property: ['branch'], label: 'branch', section: 'git'},
      {property: ['subject'], label: 'commit message', section: 'git'},
      {property: ['vcs_tag'], label: 'vcs_tag', section: 'git'},
      {property: ['compare'], label: 'compare', section: 'git', json: true},
      //Node
      {property: ['node', 0, 'public_ip_addr'], label: 'public ip', section: 'node'},
      {property: ['node', 0, 'port'], label: 'port', section: 'node'},
      {property: ['node', 0, 'username'], label: 'username', section: 'node'},
      {property: ['node', 0, 'image_id'], label: 'image id', section: 'node'},
      {property: ['node', 0, 'ssh_enabled'], label: 'ssh enabled', section: 'node'},
      //Wat?
      {property: ['dont_build'], label: 'don\'t build', section: 'wat'},
      {property: ['body'], label: 'body', section: 'wat'},

    ].filter(row => !filterCheck([row.label]))

    let identityRows = rows.filter(row => row.section === 'identities')
    let jobRows = rows.filter(row => row.section === 'jobs')
    let buildAgentRows = rows.filter(row => row.section == 'build_agent')
    let resourceClassRows = rows.filter(row => row.section == 'resource_class')
    let stepsRows = rows.filter(row => row.section === 'steps')
    let timestampRows = rows.filter(row => row.section === 'timestamps')
    let gitRows = rows.filter(row => row.section === 'git')
    let nodeRows = rows.filter(row => row.section === 'node')
    let watRows = rows.filter(row => row.section === 'wat')

    return (
    <div className={styles['diff-meta-view']}>
    <input className={styles['filter-input']} placeholder='username, branch, start time ' onChange={this.filterInput} />
    {diffBuildA.get('username') && diffBuildB.get('username') ?
      <React.Fragment>
        {/* Identity Rows*/}
        {identityRows.length > 0 &&
          <React.Fragment>
            <h3>Identities</h3>
            { identityRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <SimpleMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
        {/* Job Rows*/}
        {jobRows.length > 0 &&
          <React.Fragment>
            <h3>Jobs</h3>
            { jobRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <SimpleMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
        {/* Build Agent Rows*/}
        {buildAgentRows.length > 0 &&
          <React.Fragment>
            <h3>Build Agent</h3>
            { buildAgentRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <SimpleMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
        {/* Resource Class Rows*/}
        {resourceClassRows.length > 0 &&
          <React.Fragment>
            <h3>Resource Class</h3>
            { resourceClassRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <SimpleMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
        {stepsRows.length > 0 &&
          <React.Fragment>
            <h3>Steps</h3>
            { stepsRows.map(row => {
              switch(row.label) {
                case "names":
                  return (
                    <MetaRow key={`${row.label}`} A={diffBuildA} B={diffBuildB} 
                      label={row.label} json={row.json ? true : false} property={row.property}>
                      <Steps/>
                    </MetaRow>
                  )
                case "count":
                  return (
                      <MetaRow key={`${row.label}`} A={diffBuildA} B={diffBuildB} 
                        label={row.label} json={row.json ? true : false} property={row.property}>
                        <StepCount/>
                      </MetaRow>
                    )
              }
            })}
          </React.Fragment>
        }
        {timestampRows.length > 0 &&
          <React.Fragment>
            <h3>Timestamps</h3>
            { timestampRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <TimestampMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
        {/* Resource Class Rows*/}
        {gitRows.length > 0 &&
          <React.Fragment>
            <h3>Resource Class</h3>
            { gitRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <SimpleMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
        {nodeRows.length > 0 &&
          <React.Fragment>
            <h3>Node</h3>
            { nodeRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <SimpleMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
        {watRows.length > 0 &&
          <React.Fragment>
            <h3>Wat?</h3>
            { watRows.map(row => (
              <MetaRow key={`${row.label}`}
                A={diffBuildA} B={diffBuildB} 
                label={row.label} json={row.json ? true : false} property={row.property}>
                <SimpleMetaRow />
              </MetaRow>
            ))}
          </React.Fragment>
        }
      </React.Fragment>
      : 'Select  builds to view'
  }
  </div>
   )
  }
}

export default MetaView
