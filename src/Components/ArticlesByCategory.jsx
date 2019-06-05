import React, { Component } from 'react'
import axios from 'axios';
import { Header, Container, Grid, Card, Image, Icon, Message, Segment } from 'semantic-ui-react';
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
      <Card fluid key={filteredArticles[0].id} as={Link} to={{ pathname: '/full-article', state: { id: `${filteredArticles[0].id}` } }} >
        <div id={filteredArticles[0].id} style={{ color: 'black', boxShadow: `0 0 0 1px #d4d4d5, 0 4px 0 0 ${color}, 0 1px 3px 0 #d4d4d5`  }}>
          <Image fluid alt="article logo" id={`photo_${filteredArticles[0].id}`} src={filteredArticles[0].image} />
          <Card.Content style={{ padding: '2em' }}>
            <Card.Header as='h1' id={`title_${filteredArticles[0].id}`}>{filteredArticles[0].title}</Card.Header>
            <p id={`ingress_${filteredArticles[0].id}`}>{filteredArticles[0].ingress}</p>
            <h5 style={{ color: 'grey' }} id={`country_city_${filteredArticles[0].id}`}><Icon name='map marker alternate' />{`${filteredArticles[0].city}, ${filteredArticles[0].country}`}</h5>
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

          return (
            <>
              <Card style={{ color: 'black', border: '2px', boxShadow: `0 0 0 1px #d4d4d5, 0 4px 0 0 ${color}, 0 1px 3px 0 #d4d4d5` }} fluid key={article.id} as={Link} to={{ pathname: '/full-article/', state: { success_message: false, review_form: true, id: article.id } }} >
                <Grid id={article.id} >
                  <Grid.Column width={5} style={{ paddingBottom: '0.8em', paddingTop: '0.9em' }}>

                    <Segment style={{
                      background: `url(${article.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100%',
                      borderRadius: '0px',
                      backgroundRepeat: 'no-repeat'
                    }} >
                    </Segment>
                  </Grid.Column>
                  <Grid.Column style={{ padding: '30px 30px 30px 10px' }} width={11}>
                    <Header as='h2' id={`title_${article.id}`}>{article.title}</Header>
                    <p id={`ingress_${article.id}`}>{article.ingress}</p>
                    <p id={`country_city_${article.id}`}>{`Country: ${article.country}, City: ${article.city}`} </p>
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
          <Header id="headline">
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

            <Grid.Column width={3}>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default ArticlesByCategory 