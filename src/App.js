// import logo from './logo.svg';
import React from 'react'
import Footer from './components/footer/index.js'
import Header from './components/header/index.js'
import { Route, Switch } from 'react-router-dom'
import Functional from './components/functional/index'
import LifeCycle from './components/lifeCycles/index'
import Axios from './components/axios/index'
import Hooks from './components/hooks/index'
import Landing from './components/landing/index'

const App = () => {
  return (
    <main>
      <Header />

      <Switch>
        <Route path='/life-cycles' component={LifeCycle} />
        <Route path='/functional' component={Functional} />
        <Route path='/axios' component={Axios} />
        <Route path='/hooks' component={Hooks} />
        <Route path='/' component={Landing} />
      </Switch>
      <Footer />
    </main>
  )
}

export default App
