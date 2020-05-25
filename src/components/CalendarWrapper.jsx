import React,{useState, useEffect} from 'react'
import moment from 'moment'
import { CalendarContext } from './CalendarContext'
import Canlendar from './Canlendar'

function CalendarWrapper(props) {
  const [date, setDate] = useState()

  useEffect(() => {
    setDate(moment().format('YYYY-MM-DD'))
  }, [])

  const addMonth = () =>{
    setDate( moment(date, 'YYYY-MM-DD').add(1, 'month').format('YYYY-MM-DD')  )
  }

  const subtractMonth = () =>{
    setDate( moment(date, 'YYYY-MM-DD').subtract(1, 'month').format('YYYY-MM-DD')  )
  }





  return (
    <CalendarContext.Provider
    value={{
      date,
      setDate,
      addMonth,
      subtractMonth
    }}
    >
      <Canlendar/>
    </CalendarContext.Provider>
  )
}

export default CalendarWrapper
