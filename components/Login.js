import React, {Component} from 'react'
import {Button} from 'reactstrap'

export default class Login extends Component {
  state = {
    login: false
  }

  login = () => {
    this.setState({login: true})
  }

  render = () => (
    <div>
      <Button
        color={this.state.login ? 'success' : 'primary'}
        onClick={this.login}
      >
        Login with Facebook
      </Button>
    </div>
  )
}
