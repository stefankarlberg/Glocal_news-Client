import React, { Component } from 'react'
import axios from 'axios'
import { Divider, Segment, Button, Header, Image, Container, Grid, Message } from 'semantic-ui-react'
import moment from 'moment'

class ReviewArticle extends Component {
  state = {
    id: '',
    title: '',
    ingress: '',
    body: '',
    image: '',
    written_by: '',
    created_at: '',
    category_name: '',
    message: false,
    score: '',
    comment: '',
    redirect: '',
  }

  componentDidMount() {
    let mainPath = '/api/v1/articles/'
    let articlePath = (this.props.location.state.id)
    axios.get(mainPath + articlePath).then(response => {
      this.setState({
        id: response.data.id,
        title: response.data.title,
        ingress: response.data.ingress,
        body: response.data.body,
        image: response.data.image,
        written_by: response.data.written_by,
        created_at: response.data.created_at,
        category_name: response.data.category.name
      });
    });
    this.setState(
      {
        message: this.props.location.state.message
      }
    )
  }
  
  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

    render() {

      let dateString = this.state.created_at;
      let dateObj = new Date(dateString);
      let momentObj = moment(dateObj);
      let momentString = momentObj.format('YYYY-MM-DD');
      let message

      if (this.state.redirect === true) {
        return <Redirect to={{
          pathname: '/review-articles',
          state: {
            id: this.state.id,
            message: true
          }
        }} />
      } else if (this.state.redirect === false) {
        message = (
          <>
            <br />
            <Message color="red">
              <p>Your review could not be created because of following error(s):</p>
              <ul>
                {this.state.errors.map(error => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </Message>
          </>
        )
      
      return (
        <>
        </>
      )
    }
  }
}

export default ReviewArticle