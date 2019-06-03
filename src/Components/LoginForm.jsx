import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signInUser } from '../reduxTokenAuthConfig'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { history, signInUser } = this.props
    const {
      email,
      password
    } = this.state
    try {
      await signInUser({ email, password })
      setTimeout(function(){ history.push('/') }, 3000)
    } catch (response) { console.log(response.errors) }
  }

  render() {

    return (
      <Form id="login-form" onSubmit={this.onSubmit}>
        <Form.Input
          id="email"
          value={this.state.email}
          onChange={this.onChangeHandler}
          placeholder="Email"
        />

        <Form.Input
          id="password"
          type="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
          placeholder="Password"
        />

        <Button id="login">Login</Button>

      </Form>
    )
  }


}

export default connect(
  null,
  { signInUser },
)(LoginForm)
