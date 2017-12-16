import React from 'react'
import ReactDiff from 'react-diff'
import RecentBuildDiffs from './components/RecentBuildDiffs'
import Sticky from 'react-stickynode'
import './assets/styles/Diff.css'

const Diff = ({
  diffInputA,
  diffInputB,
  setDiffInputA,
  setDiffInputB,
  setDiffType,
  diffType,
  fetchDiffConfigA,
  fetchDiffConfigB,
  diffBuildA,
  diffBuildB,
  diffContent,
  setDiffContent,
  apiTokenValid,
}) => (
  <div>
      <Sticky enabled>
        <div className='diff-content'>
          <div>
            <select defaultValue='config' onChange={e => setDiffContent(e.target.value)}>
              <option value='build-json'>build json</option>
              <option value='config'>config</option>
            </select>
          </div>
          {diffContent
            ?
              <div>
                <select disabled={diffContent === 'config' ? false : true}
                  defaultValue={diffContent === 'config' ? diffType : 'json'}
                  onChange={e => setDiffType(e.target.value)}>
                  <option value='chars'>chars</option>
                  <option value='words'>words</option>
                  <option value='sentences'>sentences</option>
                </select>
              </div>
            : null
          }
        </div>
        <div className='config-inputs'>
          <input
            onChange={e => setDiffInputA(e.target.value)}
            onBlur={fetchDiffConfigA}
            className='config-input-a'
            type='number'
            min='0'
            value={diffInputA} />

          <input
            onChange={e => setDiffInputB(e.target.value)}
            onBlur={fetchDiffConfigB}
            className='config-input-b'
            type='number'
            min='0'
            value={diffInputB} />
        </div>
        <RecentBuildDiffs />
      </Sticky>
      <div className='diffs'>
        <ReactDiff inputA={ diffContent === 'config' ? diffBuildA.getIn(['circle_yml', 'string']) : JSON.stringify(diffBuildA, null, 2) }
          inputB={ diffContent === 'config' ? diffBuildB.getIn(['circle_yml', 'string']) : JSON.stringify(diffBuildB, null, 2) }
          type={diffContent === 'config' ? diffType : 'json'} />
      </div>
    </div>
)

export default Diff
