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
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{latest-api-version}'
    });
    FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

}
