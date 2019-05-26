import React, { Component } from 'react'
import axios from 'axios'

class FullArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingress: '',
      body: '',
      image: '',
      written_by: '',
      created_at: '',
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

  componentDidMount() {
    let mainPath = 'https://glocal-news.herokuapp.com/api/v1/articles/'
    let articlePath = this.state.id
    axios.get(`'${mainPath}${articlePath}'`).then(response => {
      this.setState({
        title: response.data.title
      });
    });
  }

  render() {
    return (
      <>
        <p>yay!</p>
        <p>{this.state.id}</p>
      </>
    )
  }
}

export default FullArticle
