import React, {Component} from 'react'
import styled from 'styled-components'

import App from '../components/App'
import {Page, Card} from '../components/Layout'

const primary = '#007bff'
const primaryHover = '#036cdd'

const Button = styled.button`
  position: relative;
  border: none;
  outline: none !important;

  font-weight: 300;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  text-decoration: none !important;
  color: #fff !important;
  background: ${primary};

  white-space: nowrap;
  padding: 8px 14px;
  border-radius: 4px;
  font-size: 1.25em;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${primaryHover};
    transform: translateY(-0.1em);
  }
`

class Login extends Component {
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
          if (status === 'connected') {
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
      console.log('User cancelled login or did not fully authorize.')
    }
  }

  render = () => (
    <Page>
      <Card>
        <Button
          color={this.state.login ? 'success' : 'primary'}
          onClick={this.login}
        >
          Login with Facebook
        </Button>
      </Card>
    </Page>
  )
}

export default App(Login)
