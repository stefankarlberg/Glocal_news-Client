import React, { Component } from 'react';
import HeaderCategory from './HeaderCategory'
import { Menu, Header, Select, Container, Divider, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const countryOptions = [
  {
    key: "Sweden",
    text: "Sweden",
    value: "Sweden",
  },
]

const cityOptions = [
  {
    key: "Stockholm",
    text: "Stockholm",
    value: "Stockholm",
  },
]

const mainLabels = [
  {
    name: 'Write An Article',
    link: '/write-article',
    id: 'write_article'
  }, {
    name: 'Review Articles',
    link: '/review-articles',
    id: 'review_articles'
  }
]
const loggedOutLabels = ['Sign Up', 'Log In']
const loggedInLabels = ['Welcome Member', 'Log Out']


class HeaderMain extends Component {
state = {
  activeItem: 'news',
}

  handleItemClick = (e) => {
    const category = e.target.id[0].toLowerCase() + e.target.id.slice(1);
    this.setState({activeItem : category})
  }

 render() {
  return (
      <>
        <Container textAlign="center" id="header"
        >
          <Divider hidden />
            <Header 
              id='news'
              name='logo'
              as={Link} 
              to={{pathname: '/news', state: {activeItem: this.state.activeItem} }}
              style={{ fontSize: "2em" }}
              onClick={this.handleItemClick}
            >
              GLOCAL NEWS
            </Header>
          <Divider hidden />
        </Container>

        <Container>
        <Segment inverted
          style={{ background: '#e0e1e2'}}
        >
          <Menu secondary>
            <Select
              style={{ border: 'none', margin: '2px' }}
              placeholder="Select country"
              selection
              id="country"
              options={countryOptions}
            />
            <Select
              style={{ border: 'none', margin: '2px'  }}
              placeholder="Select city"
              selection
              id="city_header"
              options={cityOptions}
            />

            {mainLabels.map(m => (
              <Menu.Item
                key={m.name}
                name={m.name}
                as={Link}
                to={m.link}
                id={m.id}
              />
            ))}

            <Menu.Menu position='right'>
              {loggedOutLabels.map(l => (
                <Menu.Item
                  key={l}
                  name={l}
                  link={l}
                />
              ))}
              {loggedInLabels.map(l => (
                <Menu.Item
                  key={l}
                  name={l}
                  link={l}
                />
              ))}
            </Menu.Menu>
          </Menu>
          
          </Segment>
        </Container>

        <Container>
          <HeaderCategory
           handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
        </Container>
      </>
    )
  }
}
export default HeaderMain
