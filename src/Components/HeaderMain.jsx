import React, { Component } from 'react';
import HeaderCategory from './HeaderCategory'
import { Menu, Header, Select, Container, Divider, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOutUser } from '../reduxTokenAuthConfig';
import { withRouter } from 'react-router-dom';

class HeaderMain extends Component {
  state = {
    activeItem: 'news',
  }

  handleItemClick = (e) => {
    const category = e.target.id[0].toLowerCase() + e.target.id.slice(1);
    this.setState({ activeItem: category })
  }

  signOut = (e) => {
    e.preventDefault()
    const { history, signOutUser } = this.props
    signOutUser()
      .then(response => {
        history.push('/')
      })
  }

  render() {

    const countryOptions = [
      {
        key: "Sweden",
        text: "Sweden",
        value: "Sweden",
      },
    ]

    const cityOptions = [
      {
        key: "Stockholm",
        text: "Stockholm",
        value: "Stockholm",
      },
    ]

    const mainLabels = [
      {
        name: 'Write An Article',
        link: '/write-article',
        id: 'write_article'
      }, {
        name: 'Review Articles',
        link: '/review-articles',
        id: 'review_articles'
      }
    ]

    const { signOut } = this

    let user = this.props.currentUser.isSignedIn
    let userSession = this.props.currentUser.attributes.uid
    let labels
    if (user === true) {
      let str = userSession
      let nameMatch = str.match(/^([^@]*)@/);
      let name = nameMatch ? nameMatch[1] : null;
      labels = (
        <>
          <Menu.Item
            key='welcome'
            name={`Welcome ${name}`}
            id='welcome'
          />

          <Menu.Item
            key='logOut'
            name='LogOut'
            onClick={signOut}
            id='logOut'
          />
        </>
      )
    } else {
      labels = (
        <>
          <Menu.Item
            key='signup'
            name='Sign Up'
            as={Link}
            to='/signup'
            id='sign_up'
          />

          <Menu.Item
            key='login'
            name='Log In'
            as={Link}
            to='/login'
            id='login'
          />
        </>
      )
    }

    return (
      <>
        <Container id="header" textAlign="center">
          <Divider hidden />
          <Header
            id='news'
            name='logo'
            as={Link}
            to={{ pathname: '/news', state: { activeItem: this.state.activeItem } }}
            style={{ fontSize: "2em" }}
            onClick={this.handleItemClick}
          >
            GLOCAL NEWS
          </Header>
          <Divider hidden />
        </Container>

        <Container>
          <Segment inverted
            style={{ background: '#e0e1e2' }}
          >
            <Menu secondary>
              <Select
                style={{ border: 'none', margin: '2px' }}
                placeholder="Select country"
                selection
                id="country"
                options={countryOptions}
              />
              <Select
                style={{ border: 'none', margin: '2px' }}
                placeholder="Select city"
                selection
                id="city_header"
                options={cityOptions}
              />
              {mainLabels.map(m => (
                <Menu.Item
                  key={m.name}
                  name={m.name}
                  as={Link}
                  to={m.link}
                  id={m.id}
                />
              ))}
              <Menu.Menu position='right'>
                {labels}
              </Menu.Menu>
            </Menu>
          </Segment>
        </Container>

        <Container>
          <HeaderCategory
            handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} />
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default withRouter(connect(
  mapStateToProps,
  { signOutUser },
)(HeaderMain))
