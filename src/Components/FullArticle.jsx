import React, { Component } from 'react'

class FullArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  componentDidMount() {
    this.setState(
      {
        id: this.props.location.state.id
      }    
    )
  }

  render () {
    return (
      <>
      <p>yay!</p>
      <p>{this.state.id}</p>
      </>
    )
  }
}

export default FullArticle
