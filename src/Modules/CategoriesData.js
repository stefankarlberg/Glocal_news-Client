import axios from 'axios'

const getCategories = async () => {
  try {
    let response = await axios.get('/api/v1/categories')
    debugger;
    return response.data
  } catch (error) {
    return {error}
  }

}

const getCategoryPaths = async () => {
  try {
    let response = await axios.get('/api/v1/categories');

    let paths = response.data.map(category => {
      return `/${category.name.toLowerCase()}`
    })
    return paths
  } catch (error) {
    return {error}
  }
}

const getCategoryNames = async () => {
  try {
    let response = await axios.get('/api/v1/categories');

    let news = {id: null, name: 'News'}
    response.data.unshift(news)
    return response.data
  } catch (error) {
    return {error}
  }
}
export { getCategories, getCategoryPaths, getCategoryNames }  