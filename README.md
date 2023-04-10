# transactions-manager

The purpose of the app is to produce the list of the transactions made during one app session.
## TODO in the upcoming versions

* Implement Sinon.JS to stub data in tests. (I ran into issues when installing the dependency. It is probably due to Ember version 4.11. Maybe changing the Ember.JS version will be helpful.)
* Implement Mirage.JS to run FE tests even when the server is down.
* Follow a11y guidelines to make the app accessible.
* Make the app readable on mobile screen sizes.
* Implement database.
* Make the app SEO-friendly.
## Technical Choices

* I used the newest stable version of Ember.JS.
* I am not using any CSS pre-compiler because the styling is not currently complicated. There is no need to add another library at this point.
* For Backend I used Express.js cause it's based no JS.

## API documentation

API documentation is under this link [Accounting API](https://infra.devskills.app/accounting/api/3.1.0).
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)

## Installation

```bash
npm install
npm run build # builds the app
npm run start # starts the app
npm run test # starts E2E tests
```

## Running Development

* `npm run start-dev`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Vist backend at [http://localhost:5000](http://localhost:5000)

## Running Production

* `npm run start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Vist backend at [http://localhost:5000](http://localhost:5000)

### Running Tests

* E2E tests `npm run test` at root
* Frontend tests `ember test` at /app-ember
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Useful Links

* [Ember Data](https://guides.emberjs.com/release/models/)
* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* [Cypress](https://www.cypress.io/)
* [Mirage.js](https://miragejs.com/)
* [Sinon.js](https://sinonjs.org/)