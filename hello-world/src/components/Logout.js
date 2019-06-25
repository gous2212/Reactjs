import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Logout extends Component {

  logout() {
    this.props.history.push('/');
    this.props.keycloak.logout();
  }

  render() {
    return (<div className="blurred-box">

      <table align="left" text-align="left" width="100%" >
           <tbody>
               <tr><td align="left"></td><td><input type="submit" value="Logout" size="10" onClick={ () => this.logout() }/></td></tr>
            </tbody>
            </table>
      </div>
    );
  }
}
export default withRouter(Logout);