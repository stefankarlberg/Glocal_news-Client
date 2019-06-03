import React, { Component } from 'react';
import HeaderCategory from './HeaderCategory';
import { Menu, Header, Select, Container, Divider, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutUser } from '../reduxTokenAuthConfig';


class HeaderMain extends Component {

  signOut = (e) => {
    e.preventDefault()
    const { signOutUser } = this.props
    signOutUser()
      .then(response => {
        window.location.reload(true);
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

    const loggedOutLabels = [
      {
        name: 'Sign Up',
        link: '/signup',
        id: 'sign_up'
      }, {
        name: 'Log In',
        link: '/login',
        id: 'login'
      }
    ]

    const { signOut } = this

    const loggedInLabels = [
      {
        name: 'Log Out',
        id: 'logout'
      }
    ]

    return (
      <>
        <Container textAlign="center">
          <Divider hidden />
          <Header
            as={Link}
            to='/'
            style={{ fontSize: "2em" }}>
            GLOCAL NEWS
          </Header>
          <Divider hidden />
        </Container>

        <Container>
          <Segment inverted
            style={{ background: '#e0e1e2' }} >
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
                {loggedOutLabels.map(l => (
                  <Menu.Item
                    key={l.name}
                    name={l.name}
                    as={Link}
                    to={l.link}
                    id={l.id}
                  />
                ))}
                {loggedInLabels.map(l => (
                  <Menu.Item
                    key={l.name}
                    name={l.name}
                    onClick={signOut}
                    id={l.id}
                  />
                ))}
              </Menu.Menu>
            </Menu>

          </Segment>
        </Container>

        <Container>
          <HeaderCategory />
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

export default connect(
  mapStateToProps,
  { signOutUser },
)(HeaderMain)
