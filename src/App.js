import React from 'react';
import ListOfArticles from './Components/ListOfArticles';
import HeaderMain from './Components/HeaderMain.jsx';
import WriteArticle from './Components/WriteArticle';
import ListOfUnpublishedArticles from './Components/ListOfUnpublishedArticles';
import { Switch, Route } from 'react-router-dom';
import FullArticle from './Components/FullArticle';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import { generateRequireSignInWrapper } from 'redux-token-auth';

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/login',
})

const App = () => {
  return (
    <>
      <HeaderMain />
      <Switch>
        <Route exact path='/' component={ListOfArticles}></Route>
        <Route exact path='/write-article' component={requireSignIn(WriteArticle)}></Route>
        <Route exact path='/review-articles' component={requireSignIn(ListOfUnpublishedArticles)}></Route>
        <Route exact path='/full-article/:id' component={requireSignIn(FullArticle)}></Route>
        <Route exact path='/login' component={LoginForm}></Route>
        <Route exact path='/signup' component={SignUpForm}></Route>
      </Switch>
    </>
  );
}

export default App;
