import React from 'react';
import { Menu } from 'semantic-ui-react'

const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

const HeaderCategory = () => {
  return (
    <>
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
export default HeaderCategory