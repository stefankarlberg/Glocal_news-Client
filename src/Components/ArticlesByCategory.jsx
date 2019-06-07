import React, { Component } from 'react'
import axios from 'axios';
import { Header, Container, Grid, Card, Image, Icon, Message, Segment } from 'semantic-ui-react';
import '../CSS/ArticlesByCategory.css'
import '../CSS/AdsPlaceholder.css'
import { Link } from 'react-router-dom'
import LatestNews from './LatestNews'
import { getCategoryNames } from '../Modules/categoriesData'

class ArticlesByCategory extends Component {
  state = {
    categoryName: '',
    articles: [],
    categories: []
  }

  async componentDidMount() {
    let categories = await getCategoryNames()
    let categoryName = this.props.location.pathname.substring(1)
    this.setState({
      categoryName: categoryName,
      categories: categories
    })
    axios.get('/api/v1/articles').then(response => {
      this.setState({ articles: response.data });
    })
  }

  componentDidUpdate(prevProps, prevState) {
    let categoryName = this.props.location.pathname.substring(1)
    if (prevProps.location.pathname.substring(1) !== categoryName) {
      this.setState({ categoryName: categoryName })
    }
  }

  render() {
    let category = this.state.categoryName.charAt(0).toUpperCase() + this.state.categoryName.slice(1);
    let filteredArticles = []
    let color

    this.state.articles.forEach(article => {
      if (this.state.categoryName === 'news') {
        return filteredArticles.push(article)
      } else if (article.category.name === category) {
        return filteredArticles.push(article)
      } else {
        return filteredArticles
      }
    })

    this.state.categories.forEach(category => {
      if (category.name.toLowerCase() === this.state.categoryName) {
        color = category.color
      }
    })

    let firstArticle = filteredArticles.length ? (
      <Card className='article_card' fluid key={filteredArticles[0].id} as={Link} to={{ pathname: '/full-article', state: { id: `${filteredArticles[0].id}` } }} >
        <div id={filteredArticles[0].id} style={{  boxShadow: `0 0 0 1px #d4d4d5, 0 4px 0 0 ${color}, 0 1px 3px 0 #d4d4d5`  }}>
          <Image fluid alt="article logo" id={`photo_${filteredArticles[0].id}`} src={filteredArticles[0].image} />
          <Card.Content style={{ padding: '2em' }}>
            <Card.Header as='h1' id={`title_${filteredArticles[0].id}`}>
            <Icon name='globe' style={{color: `${color}`}} />
            {filteredArticles[0].title}</Card.Header>
            <p id={`ingress_${filteredArticles[0].id}`}>{filteredArticles[0].ingress}</p>
            <h5 id={`country_city_${filteredArticles[0].id}`}><Icon name='map marker alternate' />{`${filteredArticles[0].city}, ${filteredArticles[0].country}`}</h5>
          </Card.Content>
        </div>
      </Card>
    ) : (
        <Message>
          <Message.Header>There are no {category} articles at the moment</Message.Header>
        </Message>
      )

    let articleList = filteredArticles.length ? (

          
     
      <div>
        {filteredArticles.splice(1, filteredArticles.length).map(article => {
          
          let trimmed_article_ingress = article.ingress.substr(0, 75);
          let ingress = trimmed_article_ingress.substr(0, Math.min(trimmed_article_ingress.length, trimmed_article_ingress.lastIndexOf(" "))) + ' ....'

          return (
            <>
              <Card className='article_card' style={{ 
                boxShadow: `0 0 0 1px #d4d4d5, 0 4px 0 0 ${color}, 0 1px 3px 0 #d4d4d5`
                 }} 
                 fluid key={article.id} 
                 as={Link} to={{ pathname: '/full-article/', state: { success_message: false, review_form: false, id: article.id } }} >
                <Grid id={article.id} >
                  <Grid.Column width={6} className='article_image'>
                    <Segment className='small_card' style={{ background: `url(${article.image})`}} >
                    </Segment>
                  </Grid.Column>
                  <Grid.Column className='card_content' width={10}>
                    <h2 id={`title_${article.id}`}>{article.title}</h2>
                    <p id={`ingress_${article.id}`}>{ingress}</p>
                    
                    <Grid.Row columns={2}>
                      <Grid.Column floated='left' width={5}>
                        <p id={`country_city_${article.id}`}><Icon name='map marker alternate'/>{`${article.city}, ${article.country}`} </p>
                      </Grid.Column>
                      <Grid.Column floated='right' width={2}>
                        <h4 style={{color: color}}>Read more<Icon name='angle right'/></h4>
                      </Grid.Column>
                    </Grid.Row>

                  </Grid.Column>
                </Grid>
              </Card>
            </>
          )
        })}
      </div>
    ) : (
        <Message>
          <p>
            Be the first to post your own article and become a neighborhood journalist!
        </p>
        </Message>
      )

    return (
      <>
        <Container>
          <Header as='h2' id="headline">
            {category}
          </Header>

          <Grid fluid columns={3}>
            <Grid.Column width={8}>
              {firstArticle}
              {articleList}
            </Grid.Column>

            <Grid.Column width={4}>
              <LatestNews
                articles={this.state.articles}
              />
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment vertical textAlign='center' className='ads_placeholder'>
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