import React, { Component } from 'react';
import { Menu, Divider, Container } from 'semantic-ui-react'

const categories = [
  {name: 'News', color: 'red'},
  {name: 'Business', color: 'blue'},
  {name: 'Tech', color: 'pink'},
  {name: 'Sports', color: 'teal'},
  {name: 'Politics', color: 'grey'},
  {name: 'Science', color: 'olive'},
  {name: 'Real Estate', color: 'black'},
  {name: 'Arts', color: 'purple'},
  {name: 'Opinion', color: 'brown'},
  {name: 'Food', color: 'orange'},
  {name: 'Books', color: 'violet'},
  {name: 'Travel', color: 'green'},
  {name: 'Style', color: 'yellow'}
]

class HeaderCategory extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
  
  return (
    <>
      <Container>
          <Menu pointing secondary >
            {categories.map (c => (
              <Menu.Item
              style={{ margin: "auto" }}
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
      </Container>
    </>
    )
  }
}
export default HeaderCategory