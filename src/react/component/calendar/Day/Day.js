'use strict';

import React, { Component } from "react"
import './Day.scss'
//import './Day.styled'


console.log("-- Calendar > DAY component initialised -- ");
/*********************************************************************************************/
export default class Day extends Component {
	
	constructor() {
		super();

		this.daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	}

	render() {
		return (
			<li>
				<a href="#">
					<span>{ this.daynames[this.props.day].slice(0,3) }</span>
					<span>{ this.props.date }</span>
				</a>
			</li>
		)
	}
}