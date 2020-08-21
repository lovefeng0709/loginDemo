import React from 'react';

export default class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      username:'',
      email:'',
      password:'',
      passwordConfirm:''
    }
  }
  handleSubmit=(e) => {
    e.preventDefault()
    this.props.signUpData(this.state)
  }
 
  onChange=(e) => {
    this.setState({
    [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}  class="form-horizontal">
        <h3 className="text-center">注册</h3>
        <div className="form-group">
          <label htmlFor="username" className="control-label col-sm-2">用户名：</label>
          <div className="col-sm-10">
            <input type="text"  className="form-control" name="username" id="username" value={this.state.username } onChange={this.onChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="control-label col-sm-2">邮箱：</label>
          <div className="col-sm-10">
            <input type="email"  className="form-control" name="email" id="email" value={this.state.email } onChange={this.onChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="control-label col-sm-2">密码：</label>
          <div className="col-sm-10">
            <input type="password"  className="form-control" name="password" id="password" value={this.state.password } onChange={this.onChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirm" className="control-label col-sm-2">确认密码：</label>
          <div className="col-sm-10">
          <input type="password"  className="form-control" name="passwordConfirm" id="passwordConfirm" value={this.state.passwordConfirm } onChange={this.onChange} />
          </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary" >注册</button>
            </div>
        </div>
      </form>
    )
  }
}