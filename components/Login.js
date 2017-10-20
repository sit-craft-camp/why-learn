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
  <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '153854811888809',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.10'
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.10&appId=153854811888809';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

   function statusChangeCallbac(response){
    if(response.status === 'connected'){
      console.log('Logged in and authenticated');
    }
    else {
      console.log('Not authenticated');
    }
   }

   FB.login(function(response) {
    if (response.authResponse) {
      var access_token =   FB.getAuthResponse()['accessToken'];
      console.log('Access Token = '+ access_token);
      FB.api('/me', function(response) {
      console.log('Good to see you, ' + response.name + '.');
      });
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }, {scope: ''});

  </script>

  const loginButton = {
    <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
  }
}
