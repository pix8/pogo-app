<template lang="pug">
	#pix8--calendar.ui__calendar
		.outer-wrapper
			h2 Calendar

			.inner-wrapper(v-on:scroll="scrollHandler")
				dl(v-for="(month, i) in render", :index="i", :key="i")
					dt {{ month.STATICS.MONTHNAME[month.index] }}
					
					dt.year(v-if="!month.index") {{ month.year }}
					
					dd
						ol.list-unstyled
							li(is="day", v-for="(day, date) in month.month", :class="{cal__weekend: day == 0 || day == 6}", :coords="{x:i, y:date}", :key="[month.year, (month.index+1), (date+1)].join('-')", :timedatestamp="{year: month.year, month: month.index+1, date: date+1}")
								span {{ month.STATICS.DAYNAME[day].slice(0,3) }}
								span {{ date+1 }}
</template>


<script>

import _ from 'underscore'
import Moment from 'moment'

import Day from './Day'

import CalendarService, {STATICS} from '../../../js/api/api.Calendar.es6'


console.log("-- 1. VUE:CALENDAR component initialised -- ");
/*********************************************************************************************/
export default {
	name: 'calendar',

	components: {
		Day
	},

	beforeCreate() {},

	created() {
		this.STATE.loading = true;

		/**********************************************************
		--> SERVICE ENPOINT GET CALENDAR(month)
		***********************************************************/
		CalendarService.getMonth( this.epoch ) //ACTION
			.then( (month) => {
				this.apiCalendar.push(month);

				this.STATE.loading = false;
			});
	},

	mounted() {},

	props: ['epoch'],

	data() {
		return {
			apiCalendar: [],
			STATE: {
				isLoading: false
			}
		}
	},

	computed: {
		render() {
			return this.apiCalendar;
		}
	},

	watch: {},

	methods: {
		scrollHandler: _.debounce( function(event) {
			// let el = this.$el.querySelector('.inner-wrapper');
			// //console.log("scrolling... ", $(el).scrollLeft(), " >> ", el.scrollWidth - el.offsetWidth);

			// //1. if the container has reached the end of the scrollbar --> fetch next month(entry)
			// //TODO: remove jquery dependency
			// if( $(el).scrollLeft() >= (el.scrollWidth - el.offsetWidth) ) {

			// 	let nextMonth = Moment( new Date( this.epoch ).toISOString() ).add(this.apiCalendar.length, 'months');

			// 	this.STATE.isLoading = true;

			// 	/**********************************************************
			// 	--> SERVICE ENPOINT GET CALENDAR(month)
			// 	***********************************************************/
			// 	CalendarService.getMonth( nextMonth ) //ACTION
			// 		.then( (month) => {
			// 			this.apiCalendar.push(month);

			// 			this.STATE.isLoading = false;
			// 		});
			// }
		})
	}
}
</script>


<style lang="scss" scoped>
	.ui__calendar {
		.year {
			font-size: 30px;
			vertical-align: middle;
			display: inline-block;
			margin: 0 20px 0 0;
		}
	}

	.cal__ {
		&weekend {
			background-color: #E8E9E9;
		}
	}
</style>
