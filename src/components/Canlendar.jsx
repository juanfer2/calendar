import React, {useEffect, useState} from 'react'
import moment from 'moment'
import CalendarHeader from './default/CalendarHeader'
import CalendarHeaderDays from './default/CalendarHeaderDays'
import CalendarDays from './default/CalendarDays'

function Canlendar() {
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [days, setDays] = useState([])
  useEffect(() => {
    setMonth(moment().format('MMMM'))  
    setYear(moment().format('YYYY'))  
    console.log('====================================');
    console.log(moment().daysInMonth())
    console.log(moment().isoWeekday()); 
    console.log('====================================');
    const totalDays = moment().daysInMonth();
    let daysStandar = []
    
    for (let i = 1; i <= totalDays; i++) {
      console.log(i)
      daysStandar.push( i )
    }
    setDays( daysStandar )
  }, [])

  

  const addYear = () =>{
    console.log(moment(year))

    setYear( moment(year, 'YYYY').add(1, 'year').format('YYYY')  )
  }

  const addMonth = () =>{
    console.log(moment(month))

    setMonth( moment(month, 'MMMM').add(1, 'month').format('MMMMM')  )
  }


  return (
    <div className="calendar">
      <CalendarHeader/>
      <CalendarHeaderDays/>
      <CalendarDays/>
      <a href="https://zoom.us/oauth/authorize?response_type=code&client_id=cx7SGrfR9KyyDx6nMyjfQ&redirect_uri=https://a8af95d3.ngrok.io/callback.php" target="_blank" rel="noopener noreferrer"><img src="https://marketplacecontent.zoom.us/zoom_marketplace/img/add_to_zoom.png" height="32" alt="Add to ZOOM" /></a>
      

      {/* {month}
      {year}
      <br/> */}

      {/* { days &&  days.map( day =>
          <div key={day} >
              {day}{" "}
          </div>
      )} */}
      
      {/* <button
      onClick={ ()=> addYear() }
      >
        Addyear
      </button>

      <button
      onClick={ ()=> addMonth() }
      >
        AddMonth
      </button> */}


    </div>
  )
}

export default Canlendar
