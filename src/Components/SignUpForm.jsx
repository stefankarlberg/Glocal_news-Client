import React, { Component } from 'react'
import { Form, Button, Container, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUser } from '../reduxTokenAuthConfig'

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    message: '',
    errors_signup: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { history, registerUser } = this.props
    const {
      email,
      password,
      password_confirmation,
    } = this.state
    registerUser({ email, password, password_confirmation })
      .then(response => {
        this.setState({ message: true })
        setTimeout(function () { history.push('/') }, 1000)
      }).catch(error => {
        this.setState({
          errors_signup: error.response.data.errors.full_messages,
          message: false
        })
      })
  }

  render() {

    let user = this.props.currentUser.isSignedIn
    let message

    if (user === true && this.state.message === true) {
      message = (
        <>
          <br />
          <Message color="green">
            <p>You have succesfully signed up.</p>
          </Message>
        </>
      )
    } else if (this.state.message === false) {
      message = (
        <>
          <br />
          <Message color="red">
            <p>Your account could not be created because of following error(s):</p>
            <ul>
              {this.state.errors_signup.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </Message>
        </>
      )
    }

    return (
      <Container>
        {message}
        <Form id="signup-form" onSubmit={this.onSubmit}>
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

          <Form.Input
            required
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps,
  { registerUser },
)(SignUpForm)
