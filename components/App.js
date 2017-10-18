import React, {Component} from 'react'
import {injectGlobal} from 'styled-components'

const App = Component => class Application extends Component {
  componentWillMount() {
    injectGlobal`
      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        font-weight: 300;
      }

      * {
        box-sizing: border-box;
      }
    `
  }

  render = () => (
    <Component {...this.props} />
  )
}

export default App

