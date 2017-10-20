import React, {Component} from 'react'
import {Button} from 'reactstrap'

export default class Login extends Component {
  state = {login: false}

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.fbAsyncInit = function() {
        FB.init({
          appId: '153854811888809',
          cookie: true,
          xfbml: true,
          version: 'v2.10'
        })
    
        FB.getLoginStatus(({status}) => {
          if (status === 'connected'){
            this.setState({login: true})
          }
        })
      }
    }
  }

  login = () => FB.login(this.handleLogin, {scope: ''})

  handleLogin = res => {
    if (res.authResponse) {
      const accessToken = FB.getAuthResponse()['accessToken']
      localStorage.setItem('accessToken', accessToken)
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }

  render = () => (
    <Button
      color={this.state.login ? 'success' : 'primary'}
      onClick={this.login}
    >
      Login with Facebook
    </Button>
  )
}
