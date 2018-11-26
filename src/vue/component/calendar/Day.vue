<template lang="pug">
	li
		slot
</template>


<script>

import Utils from '../../../js/pix8/pix8.Utils'


console.log("-- Calendar > DAY ui initialised -- ");
/*********************************************************************************************/
export default {
	name: 'day',

	components: {},

	beforeCreate() {},

	created() {},

	mounted() {},

	props: ['coords', 'timedatestamp'],

	data() {
		return {
			id: null,
			position: '',
			token: [this.timedatestamp.year, Utils.zeroPad(this.timedatestamp.month), Utils.zeroPad(this.timedatestamp.date)].join('-')
		}
	},

	computed: {},

	methods: {}
}
</script>


<style lang="scss" scoped>
</style>
