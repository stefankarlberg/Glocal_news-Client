import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {getCategoryNames} from '../Modules/CategoriesData'

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
      <Menu pointing secondary>
        {this.state.categories.map(category => (
          <Menu.Item
          id={category.name.toLowerCase()}
          key={category.id}
          name={category.name}
          as={Link}
          to={{pathname: `/${category.name.toLowerCase()}`, state: {categoryName: `${category.name}`} }}
          active={activeItem === category.name}
          onClick={this.handleItemClick}
          />
        ))}
      </Menu>
    </>
    )
  }
}
export default HeaderCategory