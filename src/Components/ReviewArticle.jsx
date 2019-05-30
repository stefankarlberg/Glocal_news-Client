import React, { Component } from 'react'
import axios from 'axios'
import { Container, Button } from 'semantic-ui-react'

class ReviewArticle extends Component {
  state = {
    id: '',
    title: '',
    ingress: '',
    body: '',
    image: '',
    written_by: '',
    created_at: '',
    message: false,
    score: '',
    comment: '',
    redirect: '',
  }
  
  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {

    if (this.state.redirect === true) {
      return <Redirect to={{
        pathname: '/review-articles',
        state: {
          id: this.state.id,
          message: true
        }
      }} />
    } else if (this.state.redirect === false) {
      message = (
        <>
          <br />
          <Message color="red">
            <p>Your review could not be created because of following error(s):</p>
            <ul>
              {this.state.errors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </Message>
        </>
      )
    
    return (
      <>
      </>
    )
  }
}

export default ReviewArticle