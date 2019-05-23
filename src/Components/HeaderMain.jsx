import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Header } from 'semantic-ui-react'

const loggedOutLabels = ['Sign Up', 'Log In']
const loggedInLabels = ['Welcome Member', 'Log Out']
const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

const HeaderMain = () => {
  return (
    <>
      <Header as="h1" textAlign="center">
        Glocal News
      </Header>
  
      <Menu pointing primary>
        <Menu.Item name='WRITE AN ARTICLE' />
        <Menu.Item name='REVIEW ARTICLES' />

        <Menu.Menu position='right'>
          {loggedOutLabels.map (l => (
            <Menu.Item 
            key={l}
            name={l}
            link={l}
            />
            ))}
        </Menu.Menu>

        <Menu.Menu position='right'>
          {loggedInLabels.map (l => (
            <Menu.Item 
            key={l}
            name={l}
            link={l}
            />
            ))}
        </Menu.Menu>
      </Menu>
    
      <Menu pointing secondary>
        {categories.map (c => (
          <Menu.Item
          key={c}
          name={c}
          link={c}
          />
        ))}
      </Menu>

  </>
  )
}
export default HeaderMain