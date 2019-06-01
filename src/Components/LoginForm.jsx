import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signInUser } from '../reduxTokenAuthConfig'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    uid: '',
    authenticated: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { signInUser } = this.props
    const {
      email,
      password
    } = this.state
    signInUser({ email, password })
      .then(response => {
        this.setState({ uid: response.data.uid })
      })
      .catch(
        error => {
          this.setState({
            authenticated: false,
            errors: error.response.data.error
          }
          )
        })

    // const path = '/api/vi/auth'
    // const payload = { ...this.state }
    // axios.post(path, payload)
    //   .then(response => {
    //     console.log(response)
    //     this.setState({
    //       authenticated: true,
    //       uid: 
    //     })
    //   })
    //   .catch(error => {
    //     this.setState({
    //       authenticated: false,
    //       errors: error.response.data.error
    //     })
    //   })
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