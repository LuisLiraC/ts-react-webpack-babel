import React from 'react'
import ReactDOM from 'react-dom'
import { Hello } from './components/Hello'
import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={Hello} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)