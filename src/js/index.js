'use strict';


//========= REACT
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from '../react/App';


document.documentElement.classList.remove('no-js');

ReactDOM.render(
	<ReactApp />
, document.getElementById('app--react'));



//========= VUE
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueApp from '../vue/App.vue';


Vue.config.productionTip = false


// var vm1 = new Vue({
// 	el: '#app--vue',
// 	render: h => h(VueApp)
// });

// var vm2 = new Vue({
// 	el: 'vueapp',
// 	components: { vueapp: VueApp }
// });

var vm3 = new Vue(VueApp).$mount("#app--vue");


//========= Temporary garbage - could form the basis of some unit tests
/*const mathDoer = require('./math-doer');

// This require() statement has side effects.
require('./box-creator');

// mathDoer just does some math on 2 inputs.
const result = mathDoer(7, 2);

// Console.log statements are reprinted on every reload.
console.log('Math result:' + result);*/

if(module.hot) {
	module.hot.accept();
}