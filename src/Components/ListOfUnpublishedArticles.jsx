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
      this.setState({ articles: response.data.data });
    });
  }

  render() {
    let articleList = (
      <div>
        {this.state.articles.map(article => {
          if(article.review_count < 3) {
            return (
              <Container key={article.id} as={Link} to={{ pathname: '/full-article', state: { id: `${article.id}` } }}>
                <div id={article.id} >

                  <img alt="article logo" id={`photo_${article.id}`} src={article.image} width="200" height="100" />
                  <h1 id={`title_${article.id}`}>{article.title}</h1>
                  <h3 id={`ingress_${article.id}`}>{article.ingress}</h3>
                  <br />
                </div>
              </Container>
            )
          }
        })}
      </div>
    )

  return (
    <>
      <Header>
        Unpublished Articles
      </Header>

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

export default ListOfUnpublishedArticles 