import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import ContactPage from './Pages/ContactPage/ContactPage'
import WorkPage from './Pages/WorkPage/WorkPage'
// this is only for routing this App file
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/work">
          <WorkPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App
