import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUser } from '../reduxTokenAuthConfig'

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { history, registerUser } = this.props
    const {
      email,
      password,
      password_confirmation,
    } = this.state
    try {
      await registerUser({ email, password, password_confirmation })
      history.push('/')
    } catch (error) { console.log(error) }
  }


  render() {

    return (
      <Form id="signup-form" onSubmit={this.onSubmit}>
        <Form.Input
          id="email"
          value={this.state.email}
          onChange={this.onChangeHandler}
          placeholder="Email"
        />

        <Form.Input
          id="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
          placeholder="Password"
        />

        <Form.Input
          id="password_confirmation"
          value={this.state.password_confirmation}
          onChange={this.onChangeHandler}
          placeholder="Password Confirmation"
        />

        <Button id="sign_up">Sign Up</Button>

      </Form>
    )
  }


}

export default connect(
  null,
  { registerUser },
)(SignUpForm)
