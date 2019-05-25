import React from 'react';
import HeaderCategory from './HeaderCategory'
import { Menu, Header, Select } from 'semantic-ui-react'
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
    link: ''
  }
]
const loggedOutLabels = ['Sign Up', 'Log In']
const loggedInLabels = ['Welcome Member', 'Log Out']


const HeaderMain = () => {
  return (
    <>
      <Header as="h1" textAlign="center">
        Glocal News
      </Header>
  
      <Menu pointing primary>
    
        <Select
          placeholder="Select country"
          selection 
          id="country"
          options={countryOptions}
        />
        <Select
          placeholder="Select city"
          selection
          id="city"
          options={cityOptions}
        />


        {mainLabels.map (m => (
          <Menu.Item
          key={m.name}
          name={m.name}
          as={Link}
          to={m.link}
          id={m.id}
          />
        ))}
        <Menu.Menu position='right'>
          {loggedOutLabels.map (l => (
            <Menu.Item 
            key={l}
            name={l}
            link={l}
            />
          ))}
          {loggedInLabels.map (l => (
            <Menu.Item 
            key={l}
            name={l}
            link={l}
            />
          ))}    
        </Menu.Menu>
      </Menu>
    
    <HeaderCategory/>

  </>
  )
}
export default HeaderMain