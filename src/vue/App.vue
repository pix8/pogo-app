<template lang="pug">
	#app
		calendar(:epoch="new Date().toISOString()")
</template>

<script>

import Calendar from './component/Calendar/Calendar'


console.log("-- 0. VUE APP(root) initialised -- ");
/*********************************************************************************************/
export default {
	components: {
		Calendar
	},

	data() {
		return {
		}
	},

	computed: {},

	watch: {},

	methods: {}
}
</script>
