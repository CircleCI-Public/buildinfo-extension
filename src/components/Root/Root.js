import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Diff from '../Diff'
import NotFound from '../NotFound'
import BaseLayout from '../Layouts/BaseLayout'

const Root = () => (
  <Router>
    <BaseLayout>
      <Switch>
        <Route path="/(gh|bb)/:account/:project/:buildId" component={Diff}/>
        <Route path="/(gh|bb)/:account/:project" component={Diff}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BaseLayout>
  </Router>
)

export default Root
