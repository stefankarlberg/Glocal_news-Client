import React from 'react';
import HeaderCategory from './HeaderCategory'
import { Menu, Header, Select, Container } from 'semantic-ui-react'
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
const loggedOutLabels = [
  {
    name: 'Sign Up', 
    link: '/signup',
    id: 'sign_up'
  }, {
    name: 'Log In',
    link: '/login',
    id: 'login'
  }
]
const loggedInLabels = ['Welcome Member', 'Log Out']


const HeaderMain = () => {
  return (
    <>
      <Container textAlign="center">
        <Header as={Link} to='/'>
          GLOCAL NEWS
        </Header>
      </Container>

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
              key={l.name}
              name={l.name}
              as={Link}
              to={l.link}
              id={l.id}
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
    </>
  )
}
export default HeaderMain
