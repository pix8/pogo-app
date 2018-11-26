'use strict';

import React, { Component } from "react"
import Calendar from "./component/calendar/Calendar"
import Foobar from "./component/Foobar/Foobar.component"


console.log("-- 0. REACT APP(root) initialised -- ");
/*********************************************************************************************/
export default class App extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div id="pix8--calendar" className="ui__calendar">
					<div className="outer-wrapper">
						<h2>Calendar</h2>
						
						<Calendar epoch={ new Date().toISOString() } />

						{/*<Foobar />*/}
					</div>
				</div>
			</div>
		)
	}
}
