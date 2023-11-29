import { DateField } from '@mui/x-date-pickers/DateField'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Link } from 'react-router-dom'

const AVAILABLE_TIMES = [
  '9:00 AM',
  '9:15 AM',
  '9:30 AM',
  '9:45 AM',
  '10:30 AM',
  '2:30 PM',
]

const Client = () => {
  const [date, setDate] = useState(dayjs(new Date()))
  const [selectingDate, setSelectingDate] = useState(true)

  const selectDates = () => (
    <div>
      <Box>
        <div className="font-bold">Select a date:</div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            label="Controlled field"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => setSelectingDate(!selectingDate)}
        >
          See available times
        </Button>
      </Box>
      <Button variant="text">
        <Link to="../" relative="path">
          Back
        </Link>
      </Button>
    </div>
  )

  const availableTimes = () => (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Times</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {AVAILABLE_TIMES.map((time, index) => {
          return (
            <FormControlLabel
              key={index}
              value={time}
              control={<Radio />}
              label={time}
            />
          )
        })}
      </RadioGroup>
      <Button
        variant="contained"
        onClick={() => setSelectingDate(!selectingDate)}
      >
        Submit
      </Button>
    </FormControl>
  )

  return <div>{selectingDate ? selectDates() : availableTimes()} </div>
}

export default Client
