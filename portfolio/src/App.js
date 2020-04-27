import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import Text from './Components/Text/Text'
// this is only for routing this App file
 const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/thoughts'>
            <Thoughts />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Projects() {
  return <h2>Projects</h2>
}

function Thoughts() {
  return <h2>Thoughts</h2>
}

export default App