# Pogo App Stack

For the development and maintenance of web sites and web apps alike. Data-driven single-page apps or conventional multi-page apps. It's really not fussy. Stack based on gulp + webpack(although neither are deeply coupled in this implementation), embellished with React and Vue, SASS and Pug for a (hopefully) less unopinionated, untethered, 'freestyle' development workflow.

I built this stack for the robustness of my needs and as a middle finger to modern trends to dumb things down to the extent they become inflexible to use and people dare not question the status quo - want react? run `create-react-app`, want vue? run `vue-cli`, want angular run `angular-cli`. These are all brilliant, simple, easy and convenient boilerplates. Nevertheless the one-size fits all scenario simply isn't real-world and nor is it scalable(incidentally I did have Angular serviced in this stack at one point but removed it to negate the overhead of Typescript support - jury is still out on it's inclusion).

## Getting Started

**Warning here be dragons: I've literally just thrown this up if anybody was interested or it proved useful. It's not been groomed for public consumptions and I do not really have any plans to support it other than getting it in a coherent and tidy condition and then maintaing it for my needs. I would advise that this is not for general release unless this message is removed.**

Usual routine.

```javascript
git clone git@github.com:pix8/pogo-app.git my-project
cd my-project
rm -rf .git
npm install
npm start
```

## Structure

Pogo.app

* README.md
* .editorconfig
* .gitignore
* .circleci (*continuous integration)
* package.json
* Webpack(webpack.config)
	* Babel
		* ES6/React/Vue
		* HTML
			* Pug/JSX
		* CSS
			* PostCSS
			* SASS
		* SVG
		* Webfonts
		* Static resources: Bitmaps/text/audio/video
* Gulp(gulpfile.js)
	* HTML
		* Pug/JSX
	* CSS
		* PostCSS
			* SASS
	* SVG
	* Webfonts
	* Favicons
	* Static resources: Bitmaps/text/audio/video
* .babelrc
* .eslintrc
* .postcssrc
* (API server(server.api.js)\
Mock/Services (stage: data-driven hydration/simulation)\
API(working directory)) *Optional stage
* Development server(server.dev.js)\
Source (stage: development/maintenance)\
Src(working directory)\
`npm start`
* Test (stage: quality assurance/intregity)\
Test(working directory)\
`npm run test`
* Distribution (stage: release/deploy)\
Dist(working directory)\
`npm run deploy`
