import React, { Component } from 'react';
import axios from 'axios';
import { Header, Container, Grid, Card, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class ListOfUnpublishedArticles extends Component {
  state = {
    articles: [],
    review_success_message: false
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
          if (article.published === false) {
            return (
              <Card color='purple' style={{ color: 'black', border:'2px', boxShadow: '0 0 0 1px #d4d4d5, 0 4px 0 0 #a333c8, 0 1px 3px 0 #d4d4d5' }} fluid key={article.id} as={Link} to={{ pathname: `/full-article/${article.id}`, state: { success_message: false, review_form: true } }} >
                <Grid id={article.id} >
                  <Grid.Column width={5} style={{ paddingBottom: '0.8em', paddingTop: '0.9em' }}>
                    {/* <Image alt="article logo" id={`photo_${article.id}`} src={article.image} /> */}
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
            )
          }
        })}
      </div>
    )

    let message

    if (this.state.review_success_message) {
      message = (
        <p>Review successfully created</p>
      )
    }

    return (
      <>
        <Container>
          {message}
          <Header>
            Unpublished Articles (if you see nothing in this page, there are no articles up for review)
          </Header>
          <Grid centered columns={2}>
            <Grid.Column width={12}>
              {articleList}
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

export default ListOfUnpublishedArticles
