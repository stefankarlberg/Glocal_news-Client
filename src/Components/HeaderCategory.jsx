import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'

const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

class HeaderCategory extends Component {
  state = { 
    activeItem:'',
    category_name: '',
    redirect: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name, category_name: name, redirect: true })

  render() {
    const { activeItem } = this.state

    if (this.state.redirect === true) {
      return <Redirect to={{
        pathname: '/article-by-category',
        state: {category_name: this.state.category_name}
      }} />
    }  
    
    return (
    <>
      <Menu pointing secondary>
        {categories.map (c => (
          <Menu.Item
          id={c}
          key={c}
          name={c}
          //as={Link}
          //to={{pathname: 'state: {category_name: this.state.category_name}'}}
          link={c}
          active={activeItem === c}
          onClick={this.handleItemClick}
          />
        ))}
      </Menu>
    </>
    )
  }
}
export default HeaderCategory