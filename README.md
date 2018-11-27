# Pogo App Stack

For the development of web sites and applications. Data-driven single-page apps and/or conventional multi-page apps. Stack based on gulp + webpack, embellished with React and Vue, SASS and Pug for an unopinionated, untethered freestyle development workflow.

## Structure

Pogo.app

README.md
.editorconfig
.gitignore
.circleci (*continuous integration)
package.json
Webpack(webpack.config)
	Babel
		ES6/React/Vue
		HTML
			Pug/JSX
		CSS
			PostCSS
			SASS
		SVG
		Webfonts
		Static resources: Bitmaps/text/audio/video
Gulp(gulpfile.js)
	HTML
		Pug/JSX
	CSS
		PostCSS
			SASS
	SVG
	Webfonts
	Favicons
	Static resources: Bitmaps/text/audio/video
.babelrc
.eslintrc
.postcssrc
.storybook
(API server(server.api.js)
Mock/Services (stage: data-driven hydration/simulation)
API(working directory)) *Optional stage
Development server(server.dev.js) **Included in application only
Source (stage: development/maintenance)
Src(working directory)
npm start
Storybook (stage: review/validate/document)
Stories(working directory)
npm run storybook ***Included in library only
Test (stage: quality assurance/intregity)
Test(working directory)
npm run test
Distribution (stage: release/deploy)
Dist(working directory)
npm run deploy
