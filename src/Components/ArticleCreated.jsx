import React, { Component } from 'react'


class ArticleCreated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.setState({title: this.props.location.state.title})
  }
  
  render () {
    return (
      <>
        <p>{this.state.title}</p>
      </>

      )
    }
  }

export default ArticleCreated



