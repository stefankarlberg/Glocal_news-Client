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
          <Container>
            <Grid centered columns={2}>
              <Grid.Column width={11}>
                {message}
                <Segment padded>
                  <Header id={`title_${this.state.id}`} as="h1">{this.state.title}</Header>
                    <Divider />
                      <Image id={`photo_${this.state.id}`} src={this.state.image} size="large" floated="left"></Image>
                        <p id={`ingress_${this.state.id}`} style={{ fontSize: "1.2em" }}>{this.state.ingress}</p>
                        <p id={`body_${this.state.id}`}>{this.state.body}</p>
                    <Divider />
                      <strong id={`written_${this.state.id}`}>Written by: {this.state.written_by}</strong>
                      <br></br>
                      <i id={`date_${this.state.id}`}>{momentString}</i>

                    <Form type="medium" id="review_articles" onSubmit={this.onSubmit}>
                    { /* SHOULD IT BE A NEW COLUMN OR BENEATH THE ARTICLE? */}
                    { /* SHOULD IT BE 10 DIFFERENT BUTTONS????? OR SELECTOR??? */}
                      <Form.Input
                          id="score"
                          value={this.state.score}
                          onChange={this.onChangeHandler}
                          placeholder="Score"
                        />

                      <Form.Input
                        id="comment"
                        value={this.state.comment}
                        onChange={this.onChangeHandler}
                        placeholder="Comment"
                      />
                      <Button id="create_review">Send review</Button>
                    </Form>

                </Segment>
              </Grid.Column>

              <Grid.Column width={3}>

              </Grid.Column>
            </Grid>
          </Container>
        </>
      )
    }
  }
}

export default ReviewArticle