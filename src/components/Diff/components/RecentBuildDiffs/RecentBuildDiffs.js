import React from 'react'
import './assets/styles/RecentBuildDiffs.css'

const RecentBuildDiffs = ({
  recentBuilds,
  setQuickDiff,
}) => (
  <div className='recent-build-diffs'>
    {recentBuilds
     .reverse()
     .filter((build, idx, arr) => {
       let last = idx === (arr.length - 1)

       // remove build without a config file
       if (build.circle_yml === null) {return false}

       if (!last) {
         // remove build if the next one doesn't have a config file
         if (arr[(idx + 1)].circle_yml === null) {return false}

         return build.circle_yml.string !== arr[(idx + 1)].circle_yml.string
       } else { return true}

     })
     .map((build, idx, arr) => {
       return idx !== (arr.length - 1)
        ? <div className='quick-diff-option' key={build.build_num}
            onClick={e => setQuickDiff(build.build_num, arr[(idx+1)].build_num)}>
              ({build.build_num}-{arr[(idx+1)].build_num})
          </div>
        : null
     })}
  </div>
)

export default RecentBuildDiffs
