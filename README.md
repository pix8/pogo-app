# Pogo App Stack

For the development of web sites and applications

## Structure

Pogo.app [APPLICATION] 						| 					Pogo.lib [MODULE/LIBRARY]

										README.md
										.editorconfig (specific to pix8 needs)
										.gitignore (specific to pix8 needs)
										.circleci (*continuous integration, specific to pix8 needs)

										package.json
Webpack(webpack.config) 					 					Rollup(rollup.config)
	Babel															Babel
		ES6/React/Vue													ES6/React/Vue
		HTML															HTML
			Pug/JSX															Pug/JSX
		CSS 															CSS
			PostCSS															PostCSS
			SASS															SASS
		SVG																SVG
		Webfonts														Webfonts
		Static resources: Bitmaps/text/audio/video						Static resources: Bitmaps/text/audio/video
Gulp(gulpfile.js)														Example/Sample
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


    npm run dev

Build for deployment 

    npm run deploy
    
Living styleguide, component library & documentation

    npm run storybook
