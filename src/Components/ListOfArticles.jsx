import React, { Component } from 'react';
import axios from 'axios';

class ListOfArticles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('https://localhost:3000/api/articles').then(response => {
      this.setState({ articles: response.articles });
    });
  }


  render() {

    
    return (

      <>

        <h1>HELLO!!!</h1>

      </>

    )
  }

}

export default ListOfArticles