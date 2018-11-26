'use strict';

import _ from 'underscore'
//import $ from 'jquery'
import Moment from 'moment'

import React, { Component } from "react"
import ReactDOM from "react-dom"
import Month from './Month'

import CalendarService, {STATICS} from '../../../js/api/api.Calendar.es6'
import Utils from '../../../js/pix8/pix8.Utils'



console.log("-- 1. REACT:CALENDAR component initialised -- ");
/*********************************************************************************************/
export default class Calendar extends Component {

	constructor() {
		super();

		this.state = {
			apiCalendar: [],
			STATE: {
				isLoading: false
			}
		};
	}

	//Class methods
	scrollHandler = _.debounce( (event) => { 
		//let el = ReactDOM.findDOMNode(this); //this.refs.innerWrapper;
		//console.log("scrolling... ", $(el).scrollLeft(), " >> ", el.scrollWidth - el.offsetWidth);

		//1. if the container has reached the end of the scrollbar --> fetch next month(entry)
		//TODO: remove jquery dependency
		//if( $(el).scrollLeft() >= (el.scrollWidth - el.offsetWidth) ) {

		//	let nextMonth = Moment( new Date( this.props.epoch ).toISOString() ).add(this.state.apiCalendar.length, 'months');

		//	this.state.STATE.loading = true;

			/**********************************************************
			--> SERVICE ENPOINT GET CALENDAR(month)
			***********************************************************/
		//	CalendarService.getMonth( nextMonth )
		//		.then( (month) => {
		//			this.setState({
		//				apiCalendar: this.state.apiCalendar.concat( [month] )
		//			});

		//			this.state.STATE.loading = true;
		//		});			
		//}
	})

	componentWillMount() {
		this.state.STATE.loading = true;

		/**********************************************************
		--> SERVICE ENPOINT GET CALENDAR(month)
		***********************************************************/
		CalendarService.getMonth( this.props.epoch )
			.then( (month) => {
				this.setState({
					apiCalendar: this.state.apiCalendar.concat( [month] )
				});

				this.state.STATE.loading = false;
			})
	}

	render() {
		return (
			<div className="inner-wrapper" ref="innerWrapper" onScroll={this.scrollHandler.bind(this)}>
				{
					this.state.apiCalendar.map( (item, index, arr) => {
						return <Month data={item} key={index} />;
					})
				}
			</div>
		)
	}
}
