import Open from 'react-icons/lib/md/assignment-turned-in'
import Booked from 'react-icons/lib/md/assignment-ind'

export const HotelListRow = ({hotel,date,open,pack }) =>(
		<tr>
			<td>{date.getDate()} / {date.getMonth()+1} / {date.getFullYear()}</td>
			<td>{hotel}</td>
			<td>{(open)?<Open /> : null}</td>
			<td>{(pack)?<Booked /> : null}</td>
		</tr>
	)