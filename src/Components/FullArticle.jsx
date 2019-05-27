import React, { Component } from 'react'
import axios from 'axios'
import { Divider, Segment, Header, Image, Container, Grid } from 'semantic-ui-react'
import moment from 'moment'

class FullArticle extends Component {
  state = {
    id: '',
    title: '',
    ingress: '',
    body: '',
    image: '',
    written_by: '',
    created_at: ''
  };

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
        created_at: response.data.created_at
      });
    });
  }

  render() {

    let dateString = this.state.created_at;
    let dateObj = new Date(dateString);
    let momentObj = moment(dateObj);
    let momentString = momentObj.format('YYYY-MM-DD');

    return (
      <>
        <Container>
          <Grid centered columns={2}>
            <Grid.Column width={11}>
              <Segment padded>
                <Header as="h1">{this.state.title}</Header>
                <Divider />
                <Image id={`photo_${this.state.id}`} src={this.state.image} size="large" floated="left"></Image>
                <p style={{ fontSize: "1.2em" }}>{this.state.ingress}</p>
                <p>{this.state.body}</p>
                <Divider />
                <strong>Written by: {this.state.written_by}</strong>
                <br></br>
                <i>{momentString}</i>
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

export default FullArticle
