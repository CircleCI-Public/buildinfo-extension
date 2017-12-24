import React from 'react'
import ReactDiff from '@fernfernfern/react-diff'
import RecentBuildDiffs from './components/RecentBuildDiffs'
import MetaView from './components/MetaView'
import TranslateView from './components/TranslateView'
import Sticky from 'react-stickynode'
import './assets/styles/Diff.styl'

const Diff = ({
  diffInputA,
  diffInputB,
  setDiffInputA,
  setDiffInputB,
  setDiffType,
  setDiffView,
  diffType,
  diffView,
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
      <div className='view-actions'>
        <button onClick={ () => setDiffView('diff') }>Diff</button>
        <button onClick={ () => setDiffView('meta') }>Meta</button>
        <button onClick={ () => setDiffView('translate') }>Translate Config</button>
      </div>
      <div className='config-inputs'>
        <input
          onChange={e => setDiffInputA(e.target.value)}
          onBlur={fetchDiffConfigA}
          placeholder={0}
          className='config-input-a'
          type='number'
          min='0'
          value={diffInputA} />
        <input
          onChange={e => setDiffInputB(e.target.value)}
          onBlur={fetchDiffConfigB}
          placeholder={0}
          className='config-input-b'
          type='number'
          min='0'
          value={diffInputB} />
      </div>
      {diffView === 'diff' &&
      <div>
        <div className='diff-content'>
          <div>
            <select value={diffContent} onChange={e => setDiffContent(e.target.value)}>
              <option value='build-json'>build json</option>
              <option value='config'>config</option>
            </select>
          </div>
          {diffContent === 'config'
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
      </div>
      }
    <RecentBuildDiffs />
  </Sticky>
  <div className='diffs'>
    {diffView === 'diff' &&
      <ReactDiff inputA={ diffContent === 'config' ? diffBuildA.getIn(['circle_yml', 'string']) : JSON.stringify(diffBuildA, null, 2) }
        inputB={ diffContent === 'config' ? diffBuildB.getIn(['circle_yml', 'string']) : JSON.stringify(diffBuildB, null, 2) }
        type={diffContent === 'config' ? diffType : 'json'} />
    }
    {diffView === 'meta' &&
      <MetaView />
    }
    {diffView === 'translate' &&
      <TranslateView />
    }
  </div>
</div>
  )


export default Diff
