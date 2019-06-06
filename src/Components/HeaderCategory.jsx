import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCategoryNames } from '../Modules/categoriesData'
import { Menu, Divider, Container } from 'semantic-ui-react'

class HeaderCategory extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    let categories = await getCategoryNames()
    this.setState({
      categories: categories,
    })
  }

  render() {

    return (
      <>
        <Container id="header_category">
          <Menu pointing secondary >
            {this.state.categories.map(c => (
              <Menu.Item
                style={{ margin: "auto", borderColor: (c.name.toLowerCase() === this.props.activeItem) ? `${c.color}` : "none" }}  
                id={c.name.toLowerCase()}
                key={c.id}
                name={c.name}
                as={Link}
                to={{ pathname: `/${c.name.toLowerCase()}`, state: { categoryName: `${c.name}` } }}
                active={this.props.activeItem === c.name.toLowerCase()}
                onClick={this.props.handleItemClick}
              />
            ))}
          </Menu>
          <Divider hidden />
        </Container>
      </>
    )
  }
}
export default HeaderCategory