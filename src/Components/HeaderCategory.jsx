import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getCategoryNames} from '../Modules/categoriesData'
import { Menu, Divider, Container } from 'semantic-ui-react'

class HeaderCategory extends Component {
  state = { 
    activeItem:'',
    categories: []
  }

  async componentDidMount() {
    let categories = await getCategoryNames()
    this.setState({categories: categories})
  }

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name})}

  render() {
    const { activeItem } = this.state 
    
    return (
    <>
      <Container>
          <Menu pointing secondary >
            {this.state.categories.map(c => (
              <Menu.Item
              style={{ margin: "auto" }}
              id={c.name.toLowerCase()}
              key={c.id}
              name={c.name}
              as={Link}
              to={{pathname: `/${c.name.toLowerCase()}`, state: {categoryName: `${c.name}`} }}
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