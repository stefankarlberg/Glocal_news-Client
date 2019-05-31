import React, { Component } from 'react'
import FullArticle from './FullArticle'
import ReviewForm from './ReviewForm'
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
        <ReviewForm />
      </>
    )
  }
}

export default ReviewArticle