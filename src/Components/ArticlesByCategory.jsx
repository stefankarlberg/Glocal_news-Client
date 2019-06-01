import React, { Component } from 'react'

class ArticlesByCategory extends Component {
  state = {
    category_name:''
  };

  componentDidMount() {
    this.setState(
      {
        category_name: this.props.location.state.category_name
      }
    )}

  render() {
    return(
      <>
        <h1>{this.state.category_name}</h1>
      </>
    )
  }
}

export default ArticlesByCategory 