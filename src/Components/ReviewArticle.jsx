import React, { Component } from 'react'
import FullArticle from './FullArticle'
import { Button, Form } from 'semantic-ui-react'

class ReviewArticle extends Component {
  state = {
    id: ''
  }

  componentDidMount() {
    this.setState(
      {
        id: this.props.location.state.id
      }
    )
  }
  render() {

    return (
      <>
        <FullArticle id={this.state.id}/>

        <Form>
          <Form.Input
              id="score"
              value={this.state.score}
              onChange={this.onChangeHandler}
              placeholder="Score"
            />

          <Form.Input
            id="comment"
            value={this.state.comment}
            onChange={this.onChangeHandler}
            placeholder="Comment"
          />
          <Button id="create_review">Send review</Button>
        </Form>
      </>
    )
  }
}

export default ReviewArticle