import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ReservationTable() {
  return (
    <>
<section className="reservation-wrap pt-100">
  <div className="reservation-shape bg-f" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="reservation-box-wrap">
          <div className="reservation-form">
            <h4>Table Reservation</h4>
            <form action="#">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Jhon Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="person">Person</label>
                <select name="person" id="person">
                  <option value={1}>1 Persons</option>
                  <option value={2}>2 Persons</option>
                  <option value={3}>3 Persons</option>
                  <option value={4}>4 Persons</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" />
              </div>
              <NavLink to="#" className="btn style1 mt-10">Book A Table <i className="flaticon-right-arrow-2" /></NavLink>
            </form>
          </div>
          <div className="opening-hrs">
            <div className="overlay op-9 bg-black" />
            <h4>Opening Hours</h4>
            <ul className="office-schedule  list-style">
              <li>
                <p>Monday</p>
                <p>09:00 - 18:00</p>
              </li>
              <li>
                <p>Tuesday</p>
                <p>10:00 - 18:00</p>
              </li>
              <li>
                <p>Wednesday</p>
                <p>11:00 - 18:00</p>
              </li>
              <li>
                <p>Thursday</p>
                <p>12:00 - 18:00</p>
              </li>
              <li>
                <p>Friday</p>
                <p>14:00 - 18:00</p>
              </li>
              <li>
                <p>Saturday</p>
                <p>14:00 - 18:00</p>
              </li>
              <li>
                <p>Sunday</p>
                <p>Closed</p>
              </li>
            </ul>
          </div>
          <div className="promotional-offer bg-f sm-none" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
