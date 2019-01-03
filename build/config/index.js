'use strict';

const { resolve } =        require('path');


module.exports = {
	dev: {
		env: require('./dev.env')
	},

	prod: {
		env: require('./prod.env')
	}
}
