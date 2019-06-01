import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

class HeaderCategory extends Component {
  state = { 
    activeItem:'',
    category_name: '',
  }

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name, category_name: name})}

  render() {
    const { activeItem } = this.state

    // if (this.state.redirect === true) {
    //   return <Redirect to={{
    //     pathname: '/article-by-category',
    //     state: {category_name: this.state.category_name}
    //   }} />
    // }  
    
    return (
    <>
      <Menu pointing secondary>
        {categories.map(category => (
          <Menu.Item
          id={category}
          key={category}
          name={category}
          as={Link}
          to={{pathname: '/article-by-category', state: {category_name: `${category}`} }}
          active={activeItem === category}
          onClick={this.handleItemClick}
          />
        ))}
      </Menu>
    </>
    )
  }
}
export default HeaderCategory