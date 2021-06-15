// import logo from './logo.svg';
import React from 'react'

import Header from './components/header/index.js'
import { Route, Switch } from 'react-router-dom'
import Functional from './components/functional/index'
import LifeCycle from './components/lifeCycles/index'
import Axios from './components/axios/index'
import Hooks from './components/hooks/index'
import Landing from './components/landing/index'
import './App.css'
const App = () => {
  return (
    <body>
      <div className='content'>
        <Header />

        <Switch>
          <Route path='/life-cycles' component={LifeCycle} />
          <Route path='/functional' component={Functional} />
          <Route path='/axios' component={Axios} />
          <Route path='/hooks' component={Hooks} />
          <Route path='/' component={Landing} />
        </Switch>
      </div>
      <footer className='footer'>Lauren &copy; 2021</footer>
    </body>
  )
}

export default App;
