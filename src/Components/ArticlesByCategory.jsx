import React, { Component } from 'react'
import axios from 'axios';
import { Header, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class ArticlesByCategory extends Component {
  state = {
    category_name: 'News',
    articles: []
  }

  componentDidMount() {
    let category_name= this.props.location.pathname.substring(1)
    this.setState({category_name: category_name})
    axios.get('/api/v1/articles').then(response => {
      this.setState({ articles: response.data });
    })
  }

  componentDidUpdate(prevProps) {
    let category_name= this.props.location.pathname.substring(1)
    if (prevProps.location.pathname.substring(1) !== category_name ) {
      this.setState({category_name: category_name})
    }
  }

  render() {
    let category = this.state.category_name
    let filteredArticles = []

    this.state.articles.forEach(article => {
      if (article.category.name === category) {
        return filteredArticles.push(article)
      } else {
        return filteredArticles
      }
    })

    let articleList = (
      <div>
        {filteredArticles.map(article => {
            return (
              <Container key={article.id} as={Link} to={{ pathname: '/full-article', state: { id: article.id } }}>
                <div id={article.id} >
                  <img alt="article logo" id={`photo_${article.id}`} src={article.image} width="200" height="100" />
                  <h1 id={`title_${article.id}`}>{article.title}</h1>
                  <h3 id={`ingress_${article.id}`}>{article.ingress}</h3>
                  <h5 id={`country_city_${article.id}`}>{`Country: ${article.country}, City: ${article.city}`}</h5>
                </div>
              </Container>
            )
        })}
      </div>
    )

    return(
      <>
        <Container>
          <Header id="headline">
            {category}
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

export default ArticlesByCategory 