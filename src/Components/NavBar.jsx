import React from 'react';
import { Menu, MenuHeader } from 'semantic-ui-react'

const signedOut = ['Sign Up', 'Login']
const signedIn = ['Welcome Member', 'Log Out']
const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

const NavBar = () => {
  return (
    <>
    <div>
      <div>
        <h1>Glocal News</h1>
      </div>

      <Menu pointing primary>
        <Menu.Item name='WRITE AN ARTICLE' />
        <Menu.Item name='REVIEW ARTICLES' />

        <Menu.Menu position='right'>
          {signedOut.map (c => (
            <Menu.Item 
            key={c}
            name={c}
            />
            ))}
        </Menu.Menu>
      </Menu>
    </div>

    <div>

      <Menu pointing secondary>
        {categories.map (c => (
          <Menu.Item
          key={c}
          name={c}
          />
        ))}
      </Menu>


    </div> 
  </>
  )
}
export default NavBar
