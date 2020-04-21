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
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

export default App