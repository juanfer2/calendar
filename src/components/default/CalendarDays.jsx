import React, {useState, useContext, useEffect} from 'react'
import moment from 'moment'

import { CalendarContext } from '../CalendarContext'

function CalendarDays() {
  const [hover, setHover] = useState(null)
  const [days, setDays] = useState(null)
  const [startDayOfMonth, setStartDayOfMonth] = useState(null)
  const context = useContext(CalendarContext);
  const { date } = context

  useEffect(() => {
    // const daysToday = moment(date, 'YYYY-MM-dd').format('dd')
    setStartDayOfMonth(moment(date, 'YYYY-MM-dd').isoWeekday())
    // const daysOfMonth = moment(date, 'YYYY-MM-dd').subtract(daysToday-1, 'days').format('dd');
    const totalDays = moment(date, 'YYYY-MM-dd').daysInMonth();


    let daysList = []
    for (let i = 1; i <= totalDays; i++) {
      daysList.push(i)
    }
    setDays(daysList)
  }, [date])
  
  

  console.log(moment().isoWeekday());
  return (
    <div className="calendar-days">
      {days && days.map( (day, i) =>
          <span className={"day " + 
          ( hover == day && 'circle-hover-day' )}  
          key={i}
          onMouseEnter={() => setHover(day)}
          onMouseLeave={() => setHover(null)}
          style={ i == 0 ? { gridColumn: startDayOfMonth } : {}}
          >
            {day}
          </span>
        ) }
    </div>
  )
}

export default CalendarDays
