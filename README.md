# Project Title

## **GLOCAL News**
**News for everyone, by anyone, from everywhere!**

This time around, we decided to create an online newspaper with news from around the world, where everyone can be a potential journalist and/or editor and get paid by it! We are using a peer review approach, giving a more democratic scent to the current field of online journalism.

This was a three weeks project (May 20th - June 9th).

# User Stories

Check the whole design sprint and user story history of the project in [this](https://www.pivotaltracker.com/n/projects/2349666) Pivotal Tracker board.

# Deployment & GitHub

This application consists of a back-end API and a front-end Client.

The GitHub repository for the API is [here](https://github.com/CraftAcademy/Glocal_news-API) and the one for the Client is [here](https://github.com/CraftAcademy/Glocal_news-Client).

The API is deployed using Heroku on [this address](https://glocal-news.herokuapp.com/).

The client, which is where everything happens, is deployed via Netlify [here](https://glocal-news.netlify.com/).
If you do not wish to sign up, you can use the following test credentials:
* Email: *user@mail.com*
* Password: *password*

# Tests, Test Coverage & CI

### API
The API part of the application was request and unit tested using [Rspec](https://rspec.info/).

To be able to run the tests, run `bundle install` in your terminal as soon as you fork this repository.

You must also have the database migrations in place, in order for everything to work properly. So in your terminal run `rails db:migrate`. In case this command produces an error, you can run `rails db:drop db:setup`.

After that, use `bundle exec rspec` to run all tests avoiding any conflicts with the gems of this repo and your locally installed gems.

Unit and request tests can be found in the `spec/models` and `spec/requests` folders respectively.

[Coveralls](https://coveralls.io/) was used to measure the API's test coverage.

[Semaphore CI](https://semaphoreci.com/) was used for continious integration.

### CLIENT
The Client part of the application was acceptance tested using [Cypress](https://www.cypress.io/) and component tested using [Enzyme](https://github.com/airbnb/enzyme).

To be able to run the tests, run `npm install` in your terminal as soon as you fork this repository.

After that, use `npm run cy:open` to launch a local server instance of the application and run all acceptance tests of Cypress. To run the component tests you can use `npm run test`.

Acceptance and component tests can be found in the `cypress/integration` and `src/__tests__` folders respectively.

# Built With

* API with [Ruby on Rails](https://rubyonrails.org/) version 5.2.3
* API with [Ruby](https://www.ruby-lang.org/en/) version 2.4.1
* Client with [React](https://reactjs.org/)
* Client was styled using [Semantic UI](https://react.semantic-ui.com/)

# Authors

* **Carla**- [GitHub Profile](https://github.com/Carrosen) - [Portfolio Website](https://portfolio-carla-rosen.netlify.com/)
* **Zane**- [GitHub Profile](https://github.com/zanenkn) - [Portfolio Website](https://zanenkn.netlify.com/)
* **Stefan** - [GitHub Profile](https://github.com/stefankarlberg) - [Portfolio Website](https://mystifying-einstein-390384.netlify.com/)
* **Felix** - [GitHub Profile](https://github.com/leiter007) - [Portfolio Website](https://felix-react-portfolio.netlify.com/)
* **Boa** - [GitHub Profile](https://github.com/SnailCoder1) - [Portfolio Website](https://boamatule.netlify.com/)
* **raptorf1** - [GitHub Profile](https://github.com/raptorf1) - [Portfolio Website](https://gtomaras-portfolio.netlify.com/)

# License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

# Acknowledgments

* [PurpleBooth](https://github.com/PurpleBooth) for this README template.
* [Rails Guides](https://guides.rubyonrails.org/index.html) for the detailed documentation.
* [Stack Overflow](https://stackoverflow.com/) for the guidance during the "difficult" times during development.
* [React documentation](https://reactjs.org/docs/getting-started.html) for the support we needed on related issues.
