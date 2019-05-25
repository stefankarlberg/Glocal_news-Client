import React, { Component } from 'react'
import { Divider, Segment, Header, Grid, Image, Container } from 'semantic-ui-react';


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
      <>
        <Header as="h3">
          Thank you for sharing your story! Your article is awaiting reviews.
        </Header>

      <Segment padded>
        <Header as="h1">{this.state.title}</Header>
          <Divider></Divider>

            <Image src={this.state.image} size="small" floated="left"></Image>
             <p>
                {this.state.ingress}
            </p>
            <p>
              {this.state.body}
            </p>
            <Divider></Divider>
            <p>Written by:
            <h3>{this.state.written_by}</h3>
            </p>
          </Segment>
            
      </>
      )
    }
  }

export default ArticleCreated



