import React, { Component } from 'react'
import { Form, Container, Button, Message, Dropdown } from 'semantic-ui-react'
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
    category_id: '',
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

  handleChangeCategory = (e, { value }) => {
    this.setState({ category_id: value })
  }

  render() {
    let message

    const options = [
      { key: 1, text: 'Politics', value: 1 },
      { key: 2, text: 'Opinion', value: 2 },
      { key: 3, text: 'Business', value: 3 },
      { key: 4, text: 'Technology', value: 4 },
      { key: 5, text: 'Science', value: 5 },
      { key: 6, text: 'Health', value: 6 },
      { key: 7, text: 'Sports', value: 7 },
      { key: 8, text: 'Arts', value: 8 },
      { key: 9, text: 'Books', value: 9 },
      { key: 10, text: 'Style', value: 10 },
      { key: 11, text: 'Food', value: 11 },
      { key: 12, text: 'Travel', value: 12 },
      { key: 13, text: 'Real Estate', value: 13 }
    ]
    const { value } = this.state

    if (this.state.redirect === true) {
      return <Redirect to={{
        pathname: '/full-article',
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
          <p>{message}</p>
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

            <Dropdown clearable value={value} options={options} id="category_select" onChange={this.handleChangeCategory} selection />
            <br></br>
            <br></br>

            <Button id="create">Create Article</Button>
          </Form>
        </Container>
      </>
    )
  }
}

export default WriteArticle
