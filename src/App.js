import React from 'react';
import ListOfArticles from './Components/ListOfArticles';
import HeaderMain from './Components/HeaderMain.jsx'
import WriteArticle from './Components/WriteArticle'
import ArticleCreated from './Components/ArticleCreated'
import { Switch, Route } from 'react-router-dom'
import FullArticle from './Components/FullArticle'

const App = () => {
  return (
    <>
      <HeaderMain />
        <Switch>
          <Route exact path='/' component={ListOfArticles}></Route>
          <Route exact path='/write-article' component={WriteArticle}></Route>
          <Route exact path='/article-created' component={ArticleCreated}></Route>
          <Route exact path='/full-article' component={FullArticle}></Route>
        </Switch>
    </>
  );
}

export default App;
