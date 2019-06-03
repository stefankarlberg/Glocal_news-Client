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
// const categories = [
//   {name: 'News', color: 'red'},
//   {name: 'Business', color: 'blue'},
//   {name: 'Tech', color: 'pink'},
//   {name: 'Sports', color: 'teal'},
//   {name: 'Politics', color: 'grey'},
//   {name: 'Science', color: 'olive'},
//   {name: 'Real Estate', color: 'black'},
//   {name: 'Arts', color: 'purple'},
//   {name: 'Opinion', color: 'brown'},
//   {name: 'Food', color: 'orange'},
//   {name: 'Books', color: 'violet'},
//   {name: 'Travel', color: 'green'},
//   {name: 'Style', color: 'yellow'}
// ]
    return response.data
  } catch (error) {
    return {error}
  }
}
export { getCategories, getCategoryPaths, getCategoryNames }  