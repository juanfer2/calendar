import React, {useState} from 'react'

function CalendarHeaderDays() {


  const daysList = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ]

  

  return (
    <div  >
      <div className="calendar-header-days" >
        {daysList && daysList.map( (day, i) =>
          <span className="header-days" key={i}>
            {day}
          </span>
        ) }
        
      </div>
      <div className="calendar-days">
      </div>
    </div>
  )
}

export default CalendarHeaderDays
