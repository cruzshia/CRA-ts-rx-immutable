import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'

import Home from '../../container/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={() => <div>about</div>} />
            <Route path="/users/" component={() => <div>users</div>} />
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
