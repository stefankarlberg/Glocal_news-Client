import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Container } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class ListOfArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      id: '',
      redirect: false
    }
  }

  componentDidMount() {
    axios.get('/api/v1/articles').then(response => {
      this.setState({ articles: response.data.entries });
    });
  }

  handleClick = (e) => {
    this.setState({
      redirect: true,
      id: e.currentTarget.id
    })
  }

  render() {
    let articleList
    if (this.state.redirect === true) {
      return <Redirect to={{
        pathname: '/full-article',
        state: {
          id: this.state.id
        }
      }} />
    } else if (this.state.redirect === false) {
      articleList = this.state.articles.length ? (
        <div>
          {this.state.articles.map(article => {
            return (
              <div id={article.id} key={article.id} onClick={this.handleClick}>

                <img alt="article logo" id={`photo_${article.id}`} src={article.image} width="200" height="100" />
                <h1 id={`title_${article.id}`}>{article.title}</h1>
                <h3 id={`ingress_${article.id}`}>{article.ingress}</h3>
                <br />
              </div>
            )
          })}
        </div>
      ) : (
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
