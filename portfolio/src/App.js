import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage'
import ThoughtsPage from './Pages/ThoughtsPage/ThoughtsPage'
import Text from './Components/Text/Text'
// this is only for routing this App file
 const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/portfolio'>
            <PortfolioPage />
          </Route>
          <Route path='/thoughtsPage'>
            <ThoughtsPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App