import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import './LoginForm.css'
import AppLogo from '../Icons/AppLogo';

import { USERS_LOGIN_CREDITS } from '../../constants';
import { ADMIN_LOGIN_CREDITS } from '../../constants';

const LoginForm = () => {
  let navigate = useNavigate(); 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSubmitError, setShowSubmitError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
  
  
    const onChangeUsername = event => {
      setUsername(event.target.value)
    }
  
    const onChangePassword = event => {
      setPassword(event.target.value)
    }
  
    const onSubmitSuccess = jwtToken => {
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
      })
    }
    
    const renderUserApp = (id) =>{ 
        Cookies.set("access_token",id, {expires:2})
        navigate("/");
    }

    const renderAdminApp = (id) => {
      Cookies.set("access_token",id, {expires:2})
      navigate("/")
    }

    const onSubmitFailure = errorMsg => {
      setShowSubmitError(true)
      setErrorMsg("username or Password is incorrect")
    }
  
    const submitForm = async event => {
      event.preventDefault()
      const userDetails = { username, password }
      console.log(USERS_LOGIN_CREDITS)
      const isUserMatched = USERS_LOGIN_CREDITS.find(
        (user) => user.username === username && user.password === password
      );
      const isAdmin =  ADMIN_LOGIN_CREDITS.find((admin) =>
          admin.username === username && admin.password === password
      );
      console.log(ADMIN_LOGIN_CREDITS)
      console.log("user",isAdmin)
      if (isAdmin){
        renderAdminApp(isAdmin.id)
     }
     else if(isUserMatched){
        renderUserApp(isUserMatched.id)
     }
     else{
     
     }
     

      // const options = {
      //   method: 'POST',
      //   body: JSON.stringify(userDetails),
      // }
  
      // try {
      //   const response = await fetch(url, options)
      //   const data = await response.json()
      //   if (response.ok === true) {
      //     onSubmitSuccess(data.jwt_token)
      //   } else {
      //     onSubmitFailure(data.error_msg)
      //   }
      // } catch (error) {
      //   console.error('Error while submitting the form:', error)
      // }
    }
  
    const renderPasswordField = () => {
      return (
        <>
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
          />
        </>
      )
    }
  
    const renderUsernameField = () => {
      return (
        <>
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={onChangeUsername}
            placeholder="Username"
          />
        </>
      )
    }
  
   
    return (
      <div className="login-form-container">
        {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        /> */}
        <form className="form-container" onSubmit={submitForm}>
          {/* <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          /> */}
          <div className='money-matters-login-logo'>
          <AppLogo />
         <h2 className='money'>Money <span className='matters'>Matters</span></h2>
         </div>
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
  

export default LoginForm