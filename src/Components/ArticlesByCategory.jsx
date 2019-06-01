import React, { Component } from 'react'

class ArticlesByCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category_name: ''
    }
  }

  componentDidMount() {
    this.setState({category_name: this.props.location.state.category_name}
    )}

  render() {
    let categoryHeadline = this.state.category_name

    return(
      <>
        <div>
          <h1 id="headline">{categoryHeadline}</h1>
        </div>
      </>
    )
  }
}

export default ArticlesByCategory 