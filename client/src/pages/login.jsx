import React from 'react';

export default class Login extends React.Component {
  state = {
      username: '',
      password: '',
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleLogin() {

  }

  handleRegister() {

  }
  
  render() {
    const { username, password } = this.state;
    return (
      <div>
        {/* Login Form */}
        <form>
          <input 
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
          />
          <input 
            type='text'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button type='submit'>Login</button>
        </form>
        {/* Registration Form */}
        <form onSubmit={this.handleRegister}>

        </form>
      </div>
    );
  };
}

