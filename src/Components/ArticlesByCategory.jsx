import React, { Component } from 'react'
import axios from 'axios';
import { Header, Container, Grid, Card, Image, Icon, Message, Segment, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import LatestNews from './LatestNews'

class ArticlesByCategory extends Component {
  state = {
    categoryName: '',
    articles: [],
    country: ''
  }

  componentDidMount() {
    let categoryName= this.props.location.pathname.substring(1)
    let country = this.props.country
    this.setState({categoryName: categoryName, country: country})
    axios.get('/api/v1/articles').then(response => {
      this.setState({ articles: response.data });
    })
  }

  componentDidUpdate(prevProps) {
    let categoryName= this.props.location.pathname.substring(1)
    let country= this.props.country
    if (prevProps.location.pathname.substring(1) !== categoryName ) {
      this.setState({categoryName: categoryName})
    }
    if (prevProps.country !== country) {
      this.setState({country: country})
    }
  }

  render() {
    let category = this.state.categoryName.charAt(0).toUpperCase() + this.state.categoryName.slice(1);
    let filteredArticlesByCategory = []
    let filteredArticlesByCountry = []


    //Filter articles on Category
    this.state.articles.forEach(article => {
      if (this.state.categoryName === 'news') {
        return filteredArticlesByCategory.push(article)
      } else if (article.category.name === category) {
        return filteredArticlesByCategory.push(article)
      } else {
        return filteredArticlesByCategory
      }
    })

    //Filter articles on Country
    filteredArticlesByCategory.forEach(article => {
      if (this.state.country === '') {
        filteredArticlesByCountry = filteredArticlesByCategory
      } else if (article.country === this.state.country) {
        return filteredArticlesByCountry.push(article)
      } else {
        return filteredArticlesByCountry
      }
    })

    let articleList = filteredArticlesByCountry.length ? (
      <div id="filtered_articles">
        {filteredArticlesByCountry.map(article => {
          // if (article.published === true) {
          return (
            <Card fluid key={article.id} as={Link} to={{ pathname: '/full-article', state: { id: `${article.id}` } }} >
              <div id={article.id} style={{ color: 'black' }}>
                <Image fluid alt="article logo" id={`photo_${article.id}`} src={article.image} />
                <Card.Content style={{ padding: '2em' }}>
                  <Card.Header as='h1' id={`title_${article.id}`}>{article.title}</Card.Header>
                  <p id={`ingress_${article.id}`}>{article.ingress}</p>
                  <h5 style={{ color: 'grey' }} id={`country_city_${article.id}`}><Icon name='map marker alternate'/>{`${article.city}, ${article.country}`}</h5>
                </Card.Content>
              </div>
            </Card>
          )}
        // }
        )}    
      </div>
    ) : (
      <Message>
        <Message.Header>There are no {category} articles at the moment</Message.Header>
        <p>
          Be the first to post your own article and become a neighborhood journalist!
        </p>
      </Message>
    )

    return(
      <>
        <Container>
          <Header as="h2" id="headline">
            {category}
          </Header>
          <Divider></Divider>

          <Grid fluid columns={3}>
            <Grid.Column width={8}>
              {articleList}
            </Grid.Column>

            <Grid.Column width={4}>
              <LatestNews
                articles={this.state.articles}
              />
            </Grid.Column>

            <Grid.Column width={4}>
            <Segment vertical textAlign='center' style={{ background: 'grey', height: '100%' }}>
                <p>Ads placeholder</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default ArticlesByCategory
