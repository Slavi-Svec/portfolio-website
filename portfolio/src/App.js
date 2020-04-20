import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import Heading1 from './Components/Heading1/Heading1'
import Heading2 from './Components/Heading2/Heading2'
import paragraph from './Components/Paragraph/Paragraph'

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
              <Heading1 heading1="portfolio" />
              <heading2 heading2="Another heading" />
              <paragraph paragraph="this is a paragraph" />
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