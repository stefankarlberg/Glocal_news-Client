import React from 'react';
import HeaderCategory from './HeaderCategory'
import { Menu, Header, Select, Container, Divider } from 'semantic-ui-react'
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


const HeaderMain = () => {
  return (
    <>
      <Container textAlign="center">
        <Divider hidden />
          <Header as={Link} to='/'
            as="h1"
          >
            GLOCAL NEWS
          </Header>
        <Divider hidden />
      </Container>

      <Container>
        <Menu pointing>
          <Select
            placeholder="Select country"
            selection
            id="country"
            options={countryOptions}
          />
          <Select
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
        <HeaderCategory />
      </Container>
    </>
  )
}
export default HeaderMain
