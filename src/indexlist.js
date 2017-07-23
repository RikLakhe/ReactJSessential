import React from 'react'
import {render} from 'react-dom'
import { hello,goodbye} from './lib'
import { HotelList } from './components/HotelList'

window.React =React

render(
	<HotelList 	days ={
		[
			{
				hotel:"ramlal",
				date: new Date("1/3/2016"),
				open: true,
				pack: false
			},
			{
				hotel:"lallaal",
				date: new Date("7/5/2016"),
				open: true,
				pack: false
			},
			{
				hotel:"fasdfasd",
				date: new Date("3/4/2016"),
				open: false,
				pack: true
			},
			{
				hotel:"asdfasdf",
				date: new Date("1/2/2016"),
				open: true,
				pack: false
			}
		]
	}/>,
	document.getElementById('react-container')
	)



// render(
// 	<div>{hello}{goodbye}</div>
// 	,document.getElementById('react-container')
// );