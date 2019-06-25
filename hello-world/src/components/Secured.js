import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';
//Google login details
//556936605274-18tf1pkkop8cqapu2necgj08t4ilms1l.apps.googleusercontent.com
//W_4k1p4DlL2f_eXGxJEqIC0f
class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  render() {
    if(this.state.keycloak) {
      if(this.state.authenticated) return (
        <div>
          <p align="center"><h1>Candiate registration</h1></p>
          <UserInfo keycloak={this.state.keycloak} />
          <Logout keycloak={this.state.keycloak} />
        </div>
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    );
  }
}
export default Secured;