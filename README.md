# Reservation - Frontend coding challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I did keep my development under 2 hours as requested by the challenge description. This left many features of the app partially or completely undeveloped, which I will explain below

### To start the app, run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Packages used

Tailwind CSS, Material UI, React Router

## Requirements

**Providers**

- Have an id.
  - Not completed, the home page routes you to two simple pages which shows you the provider functionality and the client functionality

     <img width="351" alt="Screen Shot 2023-11-28 at 4 33 39 PM" src="https://github.com/jeff-soriano/reservation-coding-challenge/assets/5070227/a76783e3-27f8-4d9e-923d-79ccc7930477">

- Have a schedule
    - Completed, provider can view schedule and create new schedule
      - Intended functionality:
        - The ability to edit a schedule as opposed to create a whole new one
        - Ability to add multiple time slots per day
        - Sorted days after selecting them (will appear in order days were selected)
        - Ability to add off days which would show no available days even if there are available times there usually

**Clients**

- Have an id.
- Want to reserve a 15m time ‘slot’ from a providers schedule.
    - Reservations expire after 30 mins if not confirmed.
    - Reservations must be made at least 24 hours in advance.
- Want to be able to confirm a reservation.
