import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Diff from '../Diff'
import BaseLayout from '../Layouts/BaseLayout'



const Root = () => (
  <Router>
    <BaseLayout>
      <Switch>
        <Route exact path="/bi" component={Home}/>
        <Route exact path="/bi/about" component={About}/>
        <Route exact path="/bi/contact" component={Contact}/>
        <Route exact path="/(gh|bb)/:account/:project" component={Diff}/>
        <Route exact path="/(gh|bb)/:account/:project/:buildId" component={Diff}/>
        {/* <Route path="*" component={NotFound}/> */}
      </Switch>
    </BaseLayout>
  </Router>
)

export default Root
