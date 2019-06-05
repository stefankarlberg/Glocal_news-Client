import React, {Component} from 'react';
import HeaderMain from './Components/HeaderMain.jsx'
import WriteArticle from './Components/WriteArticle'
import ListOfUnpublishedArticles from './Components/ListOfUnpublishedArticles'
import { Switch, Route, Redirect } from 'react-router-dom'
import FullArticle from './Components/FullArticle'
import ArticlesByCategory from './Components/ArticlesByCategory'
import {getCategoryPaths} from './Modules/categoriesData'

class App extends Component {
  state = {
    paths: []
  }

  async componentWillMount() {
    let categoryPaths = await getCategoryPaths()
    this.setState({paths: categoryPaths})
  }
  render() {
    return (
      <>
        <HeaderMain />
          <Switch>
            <Route exact path='/' render={() => (<Redirect to="/news" component={ArticlesByCategory} activeItem={'news'}/>)}></Route>
            <Route exact path={this.state.paths} component={ArticlesByCategory}></Route>
            <Route exact path='/write-article' component={WriteArticle}></Route>
            <Route exact path='/review-articles' component={ListOfUnpublishedArticles}></Route>
            <Route exact path='/full-article' component={FullArticle}></Route>
          </Switch>
      </>
    );
  }
}

export default App;
