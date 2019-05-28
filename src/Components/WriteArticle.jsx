import React, { Component } from 'react'
import { Form, Container, Button, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class WriteArticle extends Component {
  state = {
    id: '',
    title: '',
    ingress: '',
    body: '',
    image: '',
    written_by: '',
    redirect: '',
    errors: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const path = '/api/v1/articles'
    const payload = { ...this.state }
    axios.post(path, payload)
      .then(response => {
        console.log(response)
        this.setState({
          redirect: true,
          id: response.data.article_id
        })
      })
      .catch(error => {
        this.setState({
          redirect: false,
          errors: error.response.data.error
        })
      })
  }

  render() {
    let message

    if (this.state.redirect === true) {
      return <Redirect to={{
        pathname: '/full-article',
        state: {
          id: this.state.id,
          title: this.state.title,
          ingress: this.state.ingress,
          body: this.state.body,
          image: this.state.image,
          written_by: this.state.written_by,
          message: true
        }
      }} />
    } else if (this.state.redirect === false) {
      message = (
        <>
          <br />
          <Message color="red">
            <p>Your article could not be created because of following error(s):</p>
            <ul>
              {this.state.errors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </Message>
        </>
      )
    }

    return (
      <>
        <Container>
          <Form type="medium" id="write-article" onSubmit={this.onSubmit}>
            <Form.Input
              id="title"
              value={this.state.title}
              onChange={this.onChangeHandler}
              placeholder="Title"
            />
            <Form.TextArea
              id="ingress"
              value={this.state.ingress}
              onChange={this.onChangeHandler}
              placeholder="Ingress"
            />
            <Form.TextArea
              id="body"
              value={this.state.body}
              onChange={this.onChangeHandler}
              placeholder="Body"
            />
            <Form.Input
              id="written_by"
              value={this.state.written_by}
              onChange={this.onChangeHandler}
              placeholder="Written By"
            />
            <Form.Input
              id="image"
              value={this.state.image}
              onChange={this.onChangeHandler}
              placeholder="https://image.com"
            />
            <Button id="create">Create Article</Button>
          </Form>
          <p>{message}</p>
        </Container>
      </>
    )
  }
}

export default WriteArticle
