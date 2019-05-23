import React from 'react';
import { Menu } from 'semantic-ui-react'

const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

const NavBar = () => {
  return (
    <>
    <div>
        <h1>Glocal News</h1>
        <h2>Welcome Member</h2>
        <h2>WRITE AN ARTICLE</h2>
        <h2>REVIEW ARTICLES</h2>
        <h2>Sign Up</h2>
        <h2>Login</h2>
        <h2>Log out</h2>
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
