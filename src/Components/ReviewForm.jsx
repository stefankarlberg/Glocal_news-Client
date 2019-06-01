import React, { Component } from 'react'
import { Button, Form, Dropdown, Message } from 'semantic-ui-react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class ReviewForm extends Component {
  state = {
    score: '',
    comment: '',
    error_message: false,
    article_id: ''
  }

  handleChangeScore = (e, { value }) => {
    this.setState({ score: value })
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const path = `/api/v1/articles/${this.props.id}/reviews`
    const payload = {
      score: this.state.score,
      comment: this.state.comment,
      article_id: this.props.id
    }
    axios.post(path, payload)
      .then(response => {
        this.context.history.push({
          pathname: '/review-articles',
          state: { success_message: response.data.message }
        })
        //so here we need to redirect to review-aarticles, but it doesnt work :/

        //this.props.history.push(`/full-article/${response.data.article_id}`)
      })
      .catch(
        this.setState({
          error_message: true,
          //errors: error.response.data.error
        })
      )
  }

  render() {
    const options = [
      { key: '1', text: '1', value: '1' },
      { key: '2', text: '2', value: '2' },
      { key: '3', text: '3', value: '3' },
      { key: '4', text: '4', value: '4' },
      { key: '5', text: '5', value: '5' },
      { key: '6', text: '6', value: '6' },
      { key: '7', text: '7', value: '7' },
      { key: '8', text: '8', value: '8' },
      { key: '9', text: '9', value: '9' },
      { key: '10', text: '10', value: '10' }
    ]

    let message

    if(this.state.error_message) {
      message = (
        <>
        <br />
        <Message color="red">
          <p>Your article could not be created because of following error(s):</p>
          
        </Message>
      </>
      )
    }

    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <Dropdown
            clearable
            search
            selection
            placeholder="Select Score"
            options={options}
            id="score_select"
            onChange={this.handleChangeScore}
          />

          <Form.Input
            id="comment"
            value={this.state.comment}
            onChange={this.onChangeHandler}
            placeholder="Comment"
          />

          <Button id="create_review">Send Review</Button>
        </Form>
        {message}
      </>
    )
  }
}

export default ReviewForm