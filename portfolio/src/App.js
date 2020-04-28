import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import PortfolioPage from './Pages/Portfolio/Portfolio'
import Text from './Components/Text/Text'
// this is only for routing this App file
 const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/portfolio'>
            <PortfolioPage />
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

// function Portfolio() {
//   return <h2>Portfolio</h2>
// }

function Thoughts() {
  return <h2>Thoughts</h2>
}

export default App