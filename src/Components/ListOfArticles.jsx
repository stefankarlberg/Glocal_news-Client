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
    axios.get('http://localhost:3000/api/v1/articles').then(response => {
      this.setState({ articles: response.data.entries });
    });
  }


  render() {
    let articleList

    if (this.state.articles != null) {
      articleList = (
        <div>
          {this.state.articles.map(article => {
            return (
              <div id= {`id_${article.id}`}>
                <h1 id="title">{article.title}</h1>
                <p id="ingress">{article.ingress}</p>
              </div>
            )
          })}
        </div>
      )
    }

    // let articleLanding = article.title + article.ingress

    return (


      <>
        <h1>hello</h1>
        {articleList}

      </>

    )
  }
}

export default ListOfArticles