'use strict';

import React, { Component } from "react"
import Day from '../Day'


console.log("-- Calendar > MONTH component initialised -- ");
/*********************************************************************************************/
export default class Month extends Component {

	render() {
		return (
			<dl>
				<dt>{ this.props.data.STATICS.MONTHNAME[this.props.data.index] }</dt>

				<dd>
					<ol className="list-unstyled">
						{this.props.data.month.map( (item, index, arr) => {
							return <Day day={ item } date={ index+1 } month="" year="" target={ new Date( Date.UTC(this.props.data.year, this.props.data.index, index+1) ) } key={ index } />;
						})}
					</ol>
				</dd>
			</dl>
		)
	}
}
