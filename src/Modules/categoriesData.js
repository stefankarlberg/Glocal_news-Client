import axios from 'axios'

const getCategories = async () => {
  try {
    let response = await axios.get('/api/v1/categories')
    return response.data
  } catch (error) {
    return {error}
  }

}

const getCategoryPaths = async () => {
  try {
    let response = await axios.get('/api/v1/categories');

    let news = {id: null, name: 'News'}
    response.data.unshift(news)
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
    let colorIndex = [
      '#db2828',//red
      '#2185d0', //blue
      '#e03997', //pink
      '#00b5ad', //teal
      '#767676', //grey
      '#b5cc18', //olive
      '#1b1c1d', //black
      '#a333c8', //purple
      '#a5673f', //brown
      '#6435c9', //violet
      '#f2711c', //orange
      '#21ba45', //green
      '#fbbd08' //yellow
    ]

    colorIndex.forEach((color, index) => {
      response.data.forEach((category, categoryIndex) => {
        if (index === categoryIndex) {
          category["color"] = color	
        }
      })
    })
    

    let semanticIndex = [
      'red',
      'blue',
      'pink',
      'teal',
      'grey',
      'olive',
      'black',
      'purple',
      'brown',
      'violet',
      'orange',
      'green',
      'yellow'
    ]

    semanticIndex.forEach((semantic, index) => {
      response.data.forEach((category, categoryIndex) => {
        if (index === categoryIndex) {
          category["semantic"] = semantic	
        }
      })
    })
    return response.data
  } catch (error) {
    return {error}
  }
}
export { getCategories, getCategoryPaths, getCategoryNames }  