import React from 'react'
import {render} from 'react-dom'
import { hello,goodbye} from './lib'
import { HotelRoomCount } from './components/HotelRoomCount'

window.React =React

render(
	<HotelRoomCount 	booked={20}
						waiting={10}
						total={100} />,
	document.getElementById('react-container')
	)



// render(
// 	<div>{hello}{goodbye}</div>
// 	,document.getElementById('react-container')
// );