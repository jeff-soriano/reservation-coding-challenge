import { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Link, redirect } from 'react-router-dom'

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const NewSchedule = () => {
  const [pickingDays, setPickingDays] = useState(true)
  const [days, setDays] = useState([])

  const setDay = (day, checked) => {
    if (checked) {
      setDays([...days, day])
    } else {
      const newDays = days.filter((currDay) => currDay !== day)
      setDays([...newDays])
    }
  }

  const selectDays = () => (
    <div>
      <div className="font-bold">
        Pick the days of the week you want to work
      </div>
      <FormGroup>
        {DAYS.map((day, index) => {
          return (
            <FormControlLabel
              onChange={(e, checked) => setDay(day, checked)}
              control={<Checkbox />}
              label={day}
              key={index}
            />
          )
        })}
        <Button
          variant="contained"
          onClick={() => setPickingDays(!pickingDays)}
        >
          Continue
        </Button>
      </FormGroup>
    </div>
  )

  const selectTime = () => (
    <div>
      <div className="font-bold">Select times</div>
      {days.map((day, index) => {
        return (
          <div key={index}>
            <div>{day}</div>
            {/** Not sure why tailwind isn't working here, using inline styles to save time */}
            <div className="flex" style={{ display: 'flex' }}>
              <TextField
                id="outlined-basic"
                label="Start time"
                variant="outlined"
              />
              to
              <TextField
                id="outlined-basic"
                label="End time"
                variant="outlined"
              />
            </div>
          </div>
        )
      })}
      <br />
      <Button variant="contained" onClick={() => redirect('/provider')}>
        {/** todo: cleanup how this Link works for going back to provider page */}
        <Link className="block" to="../../provider" relative="path">
          Submit schedule
        </Link>
      </Button>
    </div>
  )

  return (
    <div>
      <div className="font-bold">New Schedule</div>

      {pickingDays ? selectDays() : selectTime()}
    </div>
  )
}

export default NewSchedule
