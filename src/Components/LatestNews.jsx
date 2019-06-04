import React, { Component } from 'react';
import { Container, Segment, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LatestNews extends Component {

  render() {

    let articleList = (
      <>
        {this.props.articles.map(article => {
          return (
            <div id={article.id} key={article.id} as={Link} to={{ pathname: '/full-article', state: { id: `${article.id}` } }} >
              <h2 id={`title_${article.id}`}>{article.title}</h2>
              <h5 style={{ color: 'grey' }} id={`country_city_${article.id}`}><Icon name='map marker alternate'/>{`${article.city}, ${article.country}`}</h5>
            </div>
          )
        })}
      </>
    )

    return (
      <Segment id="latest_news">
        <Header>Latest News</Header>
        {articleList}
      </Segment>

    )
  }
}

export default LatestNews