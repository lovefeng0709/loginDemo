import React from 'react';
import SignUpForm from './signUpForm.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signUpAction from '../../actions/signUpActions.js'

class SignUp extends  React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <SignUpForm {...this.props.signUpActions} />
          </div>
          <div className="col-md-3"></div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
      signUpActions:bindActionCreators(signUpAction,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(SignUp);