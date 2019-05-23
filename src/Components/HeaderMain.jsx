import React from 'react';
import HeaderCategory from './HeaderCategory'
import { Menu, Header, Dropdown } from 'semantic-ui-react'

const mainLabels = ['WRITE AN ARTICLE', 'REVIEW ARTICLES']
const loggedOutLabels = ['Sign Up', 'Log In']
const loggedInLabels = ['Welcome Member', 'Log Out']

const HeaderMain = () => {
  return (
    <>
      <Header as="h1" textAlign="center">
        Glocal News
      </Header>
  
      <Menu pointing primary>
    
        <Dropdown 
          placeholder="Select country"
          selection
        />
        <Dropdown 
          placeholder="Select city"
          selection
        />

        {mainLabels.map (m => (
          <Menu.Item
          key={m}
          name={m}
          link={m}
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