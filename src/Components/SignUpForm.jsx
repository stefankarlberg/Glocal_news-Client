import React, { Component } from 'react'
import { Form, Button, Container, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUser } from '../reduxTokenAuthConfig'

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    message: false
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
      this.setState({ message: true })
      setTimeout(function () { history.push('/') }, 3000)
    } catch (error) { console.log(error) }
  }


  render() {

    let message

    if (this.state.message === true) {
      message = (
        <>
          <br />
          <Message color="green">
            <p>You have succesfully signed up. Wait to be redirected to the main page.</p>
          </Message>
        </>
      )
    }

    return (
      <Container>
        {message}
        <Form id="signup-form" onSubmit={this.onSubmit}>
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

          <Form.Input
            id="password_confirmation"
            type="password"
            value={this.state.password_confirmation}
            onChange={this.onChangeHandler}
            placeholder="Password Confirmation"
          />

          <Button id="sign_up">Sign Up</Button>

        </Form>
      </Container>
    )
  }
}

export default connect(
  null,
  { registerUser },
)(SignUpForm)
