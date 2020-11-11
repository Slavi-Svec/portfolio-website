import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'
import ContactPage from './Pages/BlogPage/BlogPage'
import WorkPage from './Pages/WorkPage/WorkPage'
import AllPosts from './Components/AllPosts/AllPosts'
// import OnePost from './Components/OnePost/OnePost'

// this is only for routing this App file
const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
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
