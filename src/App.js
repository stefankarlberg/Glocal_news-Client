import React, {Component} from 'react';
import ListOfArticles from './Components/ListOfArticles';
import HeaderMain from './Components/HeaderMain.jsx'
import WriteArticle from './Components/WriteArticle'
import ListOfUnpublishedArticles from './Components/ListOfUnpublishedArticles'
import { Switch, Route } from 'react-router-dom'
import FullArticle from './Components/FullArticle'
import ArticlesByCategory from './Components/ArticlesByCategory'
import getCategories from './Components/CategoriesData'

// const categories = ['News', 'Arts', 'Books', 'Business', 'Food', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Style', 'Tech', 'Travel']

// const categoryPaths = []
// categories.forEach(category => {
//   categoryPaths.push(`/${category}`)
// })



class App extends Component {

  // componentDidMount() {
  //   this.setState({
  //     categories: getCategories()
  //   })  
  // }

  render() {
    let categories = getCategories();
    debugger
    let categoryNames = categories.map(category => {
      return category.name && `/${category.name}`
    })
    debugger
    return (
      <>
        <HeaderMain />
          <Switch>
            <Route exact path='/' component={ListOfArticles}></Route>
            {/* <Route exact path={categoryPaths} component={ArticlesByCategory}></Route> */}
            <Route exact path='/write-article' component={WriteArticle}></Route>
            <Route exact path='/review-articles' component={ListOfUnpublishedArticles}></Route>
            <Route exact path='/full-article' component={FullArticle}></Route>
          </Switch>
      </>
    );
  }
}

export default App;
