import Open from 'react-icons/lib/md/assignment-turned-in'
import Booked from 'react-icons/lib/md/assignment-ind'
import {HotelListRow} from './HotelListRow'

export const HotelList =({days})=>(
		<table>
		<thead>
		<tr><th>Date</th><th>Name</th><th>Open</th><th>Packed</th></tr>
		</thead>
		<tbody>
			{days.map((day,i) => 
				<HotelListRow 	key={i} 
								hotel={day.hotel}
								date={day.date}
								open={day.open}
								pack={day.pack}/>
			
			)}
		</tbody>
		</table>

	)
