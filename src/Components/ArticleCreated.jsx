import React, { Component } from 'react'


class ArticleCreated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingress: '',
      body: '',
      image: '',
      written_by: ''
    };
  }

  componentDidMount() {
    this.setState(
      {
        title: this.props.location.state.title,
        ingress: this.props.location.state.ingress,
        body: this.props.location.state.body,
        image: this.props.location.state.image,
        written_by: this.props.location.state.written_by
      }    
    )
  }
  
  render () {
    return (
      <>
        <p>Thank you for sharing your story! Your article is awaiting reviews.</p>
        <h1>{this.state.title}</h1>
        <img src={this.state.image}></img>
        <p>{this.state.ingress}</p>
        <p>{this.state.body}</p>
        <p>{this.state.wwritten_by}</p>  
      </>
      )
    }
  }

export default ArticleCreated



