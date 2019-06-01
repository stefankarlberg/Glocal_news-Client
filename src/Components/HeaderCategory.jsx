import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

class HeaderCategory extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
  
  return (
    <>
      <Menu pointing secondary>
        {categories.map (c => (
          <Menu.Item
          id={c}
          key={c}
          name={c}
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