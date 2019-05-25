import React, { Component } from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import axios from 'axios'

class WriteArticle extends Component {
  state = {
    title: '',
    ingress: '',
    body: '',
    image: '',
    written_by: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const path = '/api/v1/articles'
    const payload = {...this.state}
    axios.post(path, payload)
      .then(response => {
        console.log(response)
      })
  }
  


  render () {
    return (
      <>
        <Container>
          <Form type="medium" id="write-article" onSubmit={this.onSubmit}>
            <Form.Input
              fluid
              id="title"
              value={this.state.title}
              onChange={this.onChangeHandler}
              placeholder="Title"
            />
            <Form.TextArea
              fluid
              id="ingress"
              value={this.state.ingress}
              onChange={this.onChangeHandler}
              placeholder="Ingress"
            />
            <Form.TextArea
              fluid
              id="body"
              value={this.state.body}
              onChange={this.onChangeHandler}
              placeholder="Body"
              />
            <Form.Input
              fluid
              id="written_by"
              value={this.state.written_by}
              onChange={this.onChangeHandler}
              placeholder="Written By"
            />
            <Form.Input
              fluid
              id="image"
              value={this.state.image}
              onChange={this.onChangeHandler}
              placeholder="https://image.com"
            />
            <Button id="create">Create Article</Button>
          </Form>
        </Container>
      </>
    )
  }
}

export default WriteArticle