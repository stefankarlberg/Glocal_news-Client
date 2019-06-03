import React from 'react'
import axios from 'axios'

const getCategories = async () => {
  
  let categories = []

  await axios.get('/api/v1/categories').then(response => {
    categories.push(response.data)
  });

  return categories
}

export default getCategories