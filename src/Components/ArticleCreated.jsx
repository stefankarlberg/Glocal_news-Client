import React, { Component } from 'react'
import { Divider, Segment, Header, Message, Image, Container } from 'semantic-ui-react';


class ArticleCreated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingress: '',
      body: '',
      image: '',
      written_by: ''
    };
  }

  componentDidMount() {
    this.setState(
      {
        title: this.props.location.state.title,
        ingress: this.props.location.state.ingress,
        body: this.props.location.state.body,
        image: this.props.location.state.image,
        written_by: this.props.location.state.written_by
      }    
    )
  }
  
  render () {
    return (
      <Container>
        <Message color="green">
          Thank you for sharing your story! Your article is awaiting reviews.
        </Message>

        <Segment padded>
          <Header as="h1">{this.state.title}</Header>
          
          <Divider/>

          <Image src={this.state.image} size="large" floated="left"></Image>

          <p style={{fontSize: "1.2em"}}>{this.state.ingress}</p>
          <p>{this.state.body}</p>

          <Divider/>

          <strong>Written by: {this.state.written_by}</strong>

        </Segment>
            
      </Container>
      )
    }
  }

export default ArticleCreated



