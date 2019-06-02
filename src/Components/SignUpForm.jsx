import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUser } from '../reduxTokenAuthConfig'

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    uid: '',
    authenticated: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    // debugger
    e.preventDefault();
    const { registerUser } = this.props
    const {
      email,
      password,
      password_confirmation,
    } = this.state
    registerUser({ email, password, password_confirmation })
      .then(console.log("yay")
        //      response => {
        //      debugger
        //      this.setState({ uid: response.data.uid })
      )
      .catch(
        console.log("why???")
        //     error => {
        //    debugger
        //       this.setState({
        //        authenticated: false,
        //       errors: error.response.data.error
        //    }
      )
  }

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
