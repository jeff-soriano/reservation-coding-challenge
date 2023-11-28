import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const SCHEDULE_EXAMPLE = [
  {
    day: 'Monday',
    hours: [{ start: '9:00 AM', end: '3:00 PM' }],
  },
  {
    day: 'Tuesday',
    hours: [{ start: '9:00 AM', end: '3:00 PM' }],
  },
  {
    day: 'Wednesday',
    hours: [
      { start: '9:00 AM', end: '11:00 AM' },
      { start: '12:00 PM', end: '2:00 PM' },
    ],
  },
  {
    day: 'Friday',
    hours: [{ start: '9:00 AM', end: '3:00 PM' }],
  },
]

const OFF_DAYS = ['December 1st 2023', 'December 5th 2023']

const Provider = () => {
  return (
    <div>
      <div className="font-bold	">Current schedule:</div>
      {SCHEDULE_EXAMPLE.map((day, index) => {
        return (
          <div key={index}>
            <div>{day.day}</div>
            {day.hours.map((hour, index) => {
              return (
                <div>
                  {hour.start} to {hour.end}
                </div>
              )
            })}
          </div>
        )
      })}
      <div className="font-bold	">Off days:</div>
      {OFF_DAYS.map((day, index) => (
        <div>{day}</div>
      ))}
      <Button variant="contained">
        <Link className="block" to="new_schedule">
          Create new schedule
        </Link>
      </Button>
    </div>
  )
}

export default Provider
