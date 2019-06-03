import React, { Component } from 'react'
import { Form, Button, Container, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signInUser } from '../reduxTokenAuthConfig'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: '',
    message: false
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { history, signInUser } = this.props
    const {
      email,
      password
    } = this.state
    signInUser({ email, password })
      .then(response => {
        console.log(response.success)
        this.setState({ message: true })
        setTimeout(function () { history.push('/') }, 3000)
      }).catch(error => { console.log(error.response) })
  }

  render() {

    let message

    if (this.state.message === true) {
      message = (
        <>
          <br />
          <Message color="green">
            <p>You have succesfully logged in. Wait to be redirected to the main page.</p>
          </Message>
        </>
      )
    }

    return (
      <Container>
        <p>{message}</p>
        <Form id="login-form" onSubmit={this.onSubmit}>
          <Form.Input
            required
            id="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
            placeholder="Email"
          />

          <Form.Input
            required
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            placeholder="Password"
          />

          <Button id="login">Login</Button>

        </Form>

      </Container>
    )
  }


}

export default connect(
  null,
  { signInUser },
)(LoginForm)
