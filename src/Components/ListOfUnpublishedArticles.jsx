import React, { Component } from 'react';
import axios from 'axios';
import { Header, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class ListOfUnpublishedArticles extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    axios.get('/api/v1/articles').then(response => {
      this.setState({ articles: response.data });
    });
  }

  render() {
    let articleList = (
      <div>
        {this.state.articles.map(article => {
          if(article.published !== true) {
            return (
              <Container key={article.id} as={Link} to={{ pathname: '/full-article', state: {id: article.id } }}>
                <div id={article.id} >
                  <img alt="article logo" id={`photo_${article.id}`} src={article.image} width="200" height="100" />
                  <h1 id={`title_${article.id}`}>{article.title}</h1>
                  <h3 id={`ingress_${article.id}`}>{article.ingress}</h3>
                </div>
              </Container>
            )
          }
        })}
      </div>
    )

  return (
    <>
      <Container>
        <Header>
          Unpublished Articles
        </Header>

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

export default ListOfUnpublishedArticles 