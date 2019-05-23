import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Container } from 'semantic-ui-react'

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
    let componentArticlesState = this.state.articles.length

    if (componentArticlesState > 0) {
      articleList = (
        <div>
          {this.state.articles.map(article => {
            return (
              <div id={`id_${article.id}`} key={article.id}>
                <img alt="article logo" id="photo" src={article.image} width="200" height="100" />
                <h1 id="title">{article.title}</h1>
                <h3 id="ingress">{article.ingress}</h3>
                <br />
              </div>
            )
          })}
        </div>
      )
    } else {
      articleList = (
        <h2>There are no articles at the moment. You can be the first to post your own article and become a neighborhood journalist!</h2>
      )
    }

    return (
      <>
        <Container>
          <Grid centered columns={3}>
            <Grid.Column width={7}>
              {articleList}
            </Grid.Column>

            <Grid.Column width={4}>
            </Grid.Column>

            <Grid.Column width={3}>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default ListOfArticles