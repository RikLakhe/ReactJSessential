import React from 'react'
import '../stylesheet/ui.scss'
import Open from 'react-icons/lib/md/assignment-turned-in'
import Booked from 'react-icons/lib/md/assignment-ind'
import Waiting from 'react-icons/lib/md/assignment-late'

export const HotelRoomCount = React.createClass({
	percentToDecimal(decimal){
		return ((decimal * 100)+'%')
	},
	calcPack(booked,total){
		return this.percentToDecimal(booked/total)
	},
	calcOpen(booked,waiting,total){
		return (total-booked-waiting)
	},

	render(){
		return(
			<div className="ski-day-count">
				<div className="total-days"><Open />
				<span>Open : {this.calcOpen(this.props.booked,this.props.waiting,this.props.total)} Rooms</span>
				</div>
				<div className="powder-days"><Booked />
				<span>Booked : {this.props.booked} Rooms</span>
				</div>
				<div className="backcountry-days"><Waiting />
				<span>Waiting : {this.props.waiting} Rooms</span>
				</div>
				<div><span>{this.calcPack(this.props.booked,this.props.total)}</span></div><div><span>{this.calcPack(this.props.waiting,this.props.total)}</span></div>
				
			</div>
			)
	}
}) 