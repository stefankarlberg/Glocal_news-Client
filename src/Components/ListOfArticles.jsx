import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Container, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ListOfArticles extends Component {
  state = {
    articles: [],
    id: '',
  }


  componentDidMount() {
    axios.get('/api/v1/articles').then(response => {
      this.setState({ articles: response.data });
    });
  }


  render() {
    let articleList = this.state.articles.length ? (
      <div>
        {this.state.articles.map(article => {
          return (
            <Card fluid key={article.id} as={Link} to={{ pathname: '/full-article', state: { id: `${article.id}` } }}>
              <div id={article.id}>
                <Image fluid alt="article logo" id={`photo_${article.id}`} src={article.image} />
                  <Card.Content>
                    <Card.Header id={`title_${article.id}`}>{article.title}</Card.Header>
                    <Card.Description id={`ingress_${article.id}`}>{article.ingress}</Card.Description>
                  </Card.Content>
                  <Card.Content extra id={`country_city_${article.id}`}>{`Country: ${article.country}, City: ${article.city}`}</Card.Content>
          
              </div>
            </Card>
          )
        })}
      </div>
    ) : (
        <h2>There are no articles at the moment. You can be the first to post your own article and become a neighborhood journalist!</h2>
      )

    return (
      <>
        <Container>
          <Grid fluid columns={3}>
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
