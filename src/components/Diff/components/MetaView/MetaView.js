import React from 'react'
import moment from 'moment'
import './assets/styles/MetaView.styl'

const MetaView = ({
  diffBuildA,
  diffBuildB,
}) => (
  <div className='diff-meta-view'>
    {console.log(diffBuildA.toJS())}
    {console.log(diffBuildB.toJS())}

    {diffBuildA.get('username') && diffBuildB.get('username') ?
      <div>
        <h3>Itentities</h3>
        <div className='job-meta'>
          <div className='bi-label'>Username</div>
          <div className='left'>{ diffBuildA.get('username') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('username') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Committer Name</div>
          <div className='left'>{ diffBuildA.get('committer_name') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('committer_name') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Committer Email</div>
          <div className='left'>{ diffBuildA.get('committer_email') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('committer_email') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Author Email</div>
          <div className='left'>{ diffBuildA.get('author_email') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('author_email') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Owners</div>
          <div className='left'>{ diffBuildA.get('owners').map(name => `${name}, `) || 'null' }</div>
          <div className='right'>{ diffBuildB.get('owners').map(name => `${name}, `) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>VCS Type</div>
          <div className='left'>{ diffBuildA.get('vcs_type') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('vcs_type') || 'null' }</div>
        </div>

        <h3>Job</h3>
        <div className='job-meta'>
          <div className='bi-label'>Platform</div>
          <div className='left'>{ diffBuildA.get('platform') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('platform') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Fail Reason</div>
          <div className='left'>{ diffBuildA.get('fail_reason') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('fail_reason') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Retries</div>
          <div className='left'>{ diffBuildA.get('retries') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('retries') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Canceler</div>
          <div className='left'>{ diffBuildA.getIn(['canceler', 'login']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['canceler', 'login']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Parallel</div>
          <div className='left'>{ diffBuildA.get('parallel') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('parallel') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Build Time</div>
          <div className='left'>{ moment.duration(diffBuildA.get('build_time_millis')).humanize() || 'null' }</div>
          <div className='right'>{ moment.duration(diffBuildB.get('build_time_millis')).humanize() || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Timed Out</div>
          <div className='left'>{ diffBuildA.get('timedout') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('timedout') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Why</div>
          <div className='left'>{ diffBuildA.get('why') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('why') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Lifecycle</div>
          <div className='left'>{ diffBuildA.get('lifecycle') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('lifecycle') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Build Parameneters</div>
          <div className='left'>{ JSON.stringify(diffBuildA.get('build_parameters')) || 'null' }</div>
          <div className='right'>{ JSON.stringify(diffBuildB.get('build_parameters')) || 'null' }</div>
        </div>

        <h3>Build Agent</h3>
        <div className='job-meta'>
          <div className='bi-label'>Image</div>
          <div className='left'>{ diffBuildA.getIn(['picard', 'build_agent', 'image']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['picard', 'build_agent', 'image']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Build Agent</div>
          <div className='left'>{ diffBuildA.getIn(['picard', 'build_agent', 'properties', 'build_agent']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['picard', 'build_agent', 'properties', 'build_agent']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Executor</div>
          <div className='left'>{ diffBuildA.getIn(['picard', 'build_agent', 'properties', 'executor']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['picard', 'build_agent', 'properties', 'executor']) || 'null' }</div>
        </div>

        <h3>Resource Class</h3>
        <div className='job-meta'>
          <div className='bi-label'>CPU</div>
          <div className='left'>{ diffBuildA.getIn(['picard', 'resource_class', 'cpu']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['picard', 'resource_class', 'cpu']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>RAM</div>
          <div className='left'>{ diffBuildA.getIn(['picard', 'resource_class', 'ram']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['picard', 'resource_class', 'ram']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Class</div>
          <div className='left'>{ diffBuildA.getIn(['picard', 'resource_class', 'class']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['picard', 'resource_class', 'class']) || 'null' }</div>
        </div>

        <h3>Steps</h3>
        <div className='job-meta'>
          <div className='bi-label'>Count</div>
          <div className='left'>{ diffBuildA.getIn(['steps']).count() || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['steps']).count() || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Names</div>
          <div className='left'>{ diffBuildA.getIn(['steps']).map(step => <div>{step.get('name')}</div>) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['steps']).map(step => <div>{step.get('name')}</div>) || 'null' }</div>
        </div>

        <h3>Timestamps</h3>
        <div className='job-meta'>
          <div className='bi-label'>Usage Queued At</div>
          <div className='left'>{ moment(diffBuildA.get('usage_queued_at')).format("MMM Do YYYY, h:mm:ss a") || 'null' }</div>
          <div className='right'>{ moment(diffBuildB.get('usage_queued_at')).format("MMM Do YYYY, h:mm:ss a") || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Start Time</div>
          <div className='left'>{ moment(diffBuildA.get('start_time')).format("MMM Do YYYY, h:mm:ss a") || 'null' }</div>
          <div className='right'>{ moment(diffBuildB.get('start_time')).format("MMM Do YYYY, h:mm:ss a") || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Stop Time</div>
          <div className='left'>{ moment(diffBuildA.get('stop_time')).format("MMM Do YYYY, h:mm:ss a") || 'null' }</div>
          <div className='right'>{ moment(diffBuildB.get('stop_time')).format("MMM Do YYYY, h:mm:ss a") || 'null' }</div>
        </div>

        <h3>Git</h3>
        <div className='job-meta'>
          <div className='bi-label'>Branch</div>
          <div className='left'>{ diffBuildA.get('branch') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('branch') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Commit Message</div>
          <div className='left'>{ diffBuildA.get('subject') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('subject') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>VCS Tag</div>
          <div className='left'>{ diffBuildA.get('vcs_tag') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('vcs_tag') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Compare</div>
          <div className='left'><a href={diffBuildA.compare} target='_blank'> click </a></div>
          <div className='right'><a href={diffBuildB.compare} target='_blank'> click </a></div>
        </div>

        <h3>Node</h3>
        <div className='job-meta'>
          <div className='bi-label'>Public IP</div>
          <div className='left'>{ diffBuildA.getIn(['node', 0, 'public_ip_addr']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['node', 0, 'public_ip_addr']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Port</div>
          <div className='left'>{ diffBuildA.getIn(['node', 0, 'port']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['node', 0, 'port']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Username</div>
          <div className='left'>{ diffBuildA.getIn(['node', 0, 'username']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['node', 0, 'username']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Image ID</div>
          <div className='left'>{ diffBuildA.getIn(['node', 0, 'image_id']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['node', 0, 'image_id']) || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>SSH Enabled</div>
          <div className='left'>{ diffBuildA.getIn(['node', 0, 'ssh_enabled']) || 'null' }</div>
          <div className='right'>{ diffBuildB.getIn(['node', 0, 'ssh_enabled']) || 'null' }</div>
        </div>

        <h3>Wat?</h3>
        <div className='job-meta'>
          <div className='bi-label'>Don't Build</div>
          <div className='left'>{ diffBuildA.get('dont_build') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('dont_build') || 'null' }</div>
        </div>
        <div className='job-meta'>
          <div className='bi-label'>Body</div>
          <div className='left'>{ diffBuildA.get('body') || 'null' }</div>
          <div className='right'>{ diffBuildB.get('body') || 'null' }</div>
        </div>
      </div>
      : 'Select  builds to view'
  }
  </div>
)

export default MetaView
