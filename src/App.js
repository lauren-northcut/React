// import logo from './logo.svg';
import React from 'react';
import Footer from './components/footer/index';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom'
import Functional from './components/functional'
import LifeCycle from './components/lifeCycles'
import Axios from './components/axios'
import Hooks from './components/hooks'
import Landing from './components/landing'

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
