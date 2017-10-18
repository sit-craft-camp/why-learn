import React, {Component} from 'react'
import {injectGlobal} from 'styled-components'

class Application extends Component {
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

  render = () => this.props.children
}

export default Children => props => <Application><Children {...props} /></Application>

