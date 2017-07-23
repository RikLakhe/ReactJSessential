import '../stylesheet/ui.scss'

const percentToDecimal = (decimal) =>{
		return ((decimal * 100)+'%')
	}
const calcPack = (booked,total) => {
		return percentToDecimal(booked/total)
	}
const calcOpen = (booked,waiting,total)=>{
		return (total-booked-waiting)
	}

export const HotelRoomCount = ({waiting,booked,total}) => (
			<div className="ski-day-count">
				<div className="total-days">
				<span>Open : {calcOpen(booked,waiting,total)} Rooms</span>
				</div>
				<div className="powder-days">
				<span>Booked : {booked} Rooms</span>
				</div>
				<div className="backcountry-days">
				<span>Waiting : {waiting} Rooms</span>
				</div>
				<div><span>{calcPack(booked,total)}</span></div><div><span>{calcPack(waiting,total)}</span></div>
				
			</div>
			
)