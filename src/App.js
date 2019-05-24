import React from 'react';
import ListOfArticles from './Components/ListOfArticles';
import HeaderMain from './Components/HeaderMain.jsx'
import { Switch, Route } from "react-router-dom"
import WriteArticle from './Components/WriteArticle'

const App = () => {
  return (
    <>
      <HeaderMain />
        <Switch>
          <Route exact path='/' component={ListOfArticles}></Route>
          <Route exact path='/writeArticle' component={WriteArticle}></Route>
        </Switch>
    </>
  );
}

export default App;