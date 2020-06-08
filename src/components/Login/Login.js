import React, { useState } from 'react'
import './Login.css'
import '../RegularBtn/RegularBtn.css'
import LoginBtn from './LoginBtn'
import Modal from '../Modal/Modal'
import History from '../History/History'
import RegularBtn from '../RegularBtn/RegularBtn'


export default function Login() {
  const [isOpen, setOpen] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [userHistory, setUserHistory] = useState([])
  const openLogin = () => {
    if (isLoggedIn) setCurrUserHistory(email)
    setOpen(true)
  }
  const closeLogin = () => setOpen(false)
  const logOut = () => {
    setLoggedIn(false)
    setEmail('')
  }

  function handleChange(event) {
    const input = event.target
    const value = input.value
    setEmail(value)
  }


  function handleSubmit(event) {
    event.preventDefault()
    setCurrUserHistory(email)
  }


  function setCurrUserHistory(email) {
    const userOrders = JSON.parse(localStorage.getItem('userOrders'))
    let currUserOrders = userOrders.filter(user => user.email === email)
    let isUser = currUserOrders.length ? true : false
    if (isUser) {
      setLoggedIn(true)
      const userOrders = []
      currUserOrders.map(order => userOrders.push({order: order.order, time: order.time}))
      setUserHistory(userOrders)
    } else alert('Cannot find this Email. Make an order to register.')
  }


  return (
    <React.Fragment>
      <LoginBtn openLogin={openLogin.bind(null)} />
      {isOpen && (
        <Modal onclose={closeLogin.bind(null)}>
          {isLoggedIn ? (
            <History userHistory={userHistory}>
              <p>You logged in as <strong>{email}</strong></p>
              <RegularBtn onclick={logOut.bind(null)}>Logout</RegularBtn>
            </History>
          ) : (
            <React.Fragment>
              <h1>Login</h1>
              <form onSubmit={handleSubmit.bind(null)}>
                <label className="login__email">
                  Email
                  <input type="email" name="email" className="login__input" onChange={handleChange.bind(null)} required/>
                </label>
                <button type="submit" className="regular-btn">Login</button>
              </form>
            </React.Fragment>
          )}
          
        </Modal>
      )}
    </React.Fragment>
  )
}