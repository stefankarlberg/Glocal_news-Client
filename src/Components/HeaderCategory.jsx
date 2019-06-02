import React, { Component } from 'react';
import { Menu, Divider } from 'semantic-ui-react'

const categories = [
  {name: 'News', color: 'red'},
  {name: 'Arts', color: 'yellow'},
  {name: 'Books', color: 'pink'},
  {name: 'Business', color: 'purple'},
  {name: 'Food', color: 'blue'},
  {name: 'Opinion', color: 'orange'},
  {name: 'Politics', color: 'green'},
  {name: 'Real Estate', color: 'teal'},
  {name: 'Science', color: 'olive'},
  {name: 'Sports', color: 'brown'},
  {name: 'Style', color: 'violet'},
  {name: 'Tech', color: 'grey'},
  {name: 'Travel', color: '#009900'}
]

class HeaderCategory extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
  
  return (
    <>
        <Menu pointing secondary centered>
          {categories.map (c => (
            <Menu.Item
            key={c.name}
            name={c.name}
            link={c.name}
            color={c.color}
            active={activeItem === c.name}
            onClick={this.handleItemClick}
            />
          ))}
        </Menu>
      <Divider hidden/>
    </>
    )
  }
}
export default HeaderCategory