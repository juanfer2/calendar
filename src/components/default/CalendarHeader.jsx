import React, {useState, useContext, useEffect} from 'react'
import moment from 'moment'
import { CalendarContext } from '../CalendarContext'

import IosArrowForward from 'react-ionicons/lib/IosArrowForward'
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'

function CalendarHeader() {
  const [hover, setHover] = useState(false)
  const [year, setYear] = useState(false)
  const [month, setMonth] = useState()
  const context = useContext(CalendarContext);
  const { date, addMonth, subtractMonth } = context
  
  useEffect(() => {
    console.log(date)
    setMonth(moment(date, 'YYYY-MM-DD').format('MMMM'))
    setYear(moment(date, 'YYYY-MM-DD').format('YYYY'))
  }, [date])
  
  return (
    <div className="calendar-header">
      <div className="circle-hover" 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={ () => subtractMonth() }
      >
        <IosArrowBack className={hover ? "circle-icon-hover": ''}  fontSize="30px" color={hover ? "#2F4AFF": ''} />
      </div>
      <span> {month} ({year}) </span>
      <div className="circle-hover" 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={ () => addMonth() }
      >
        <IosArrowForward  className={hover ? "circle-icon-hover": ''}  fontSize="30px" color={hover ? "#2F4AFF": ''} />
      </div>
    </div>
  )
}

export default CalendarHeader
