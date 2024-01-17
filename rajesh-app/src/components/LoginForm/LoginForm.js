import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import './LoginForm.css'
import AppLogo from '../Icons/AppLogo';


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
    

    const renderApp = (id) => {
      Cookies.set("access_token",id, {expires:2/24})
      navigate("/")
    }

    const onSubmitFailure = errorMsg => {
      setShowSubmitError(true)
      setErrorMsg("username or Password is incorrect")
    }
  
    const submitForm = async event => {
      event.preventDefault()
      const userDetails = { email:username, password:password }
      const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/get-user-id"
      const url = `${apiUrl}?email=${username}&password=${password}`;

      
    const options = {
      method:"POST",
        headers :{
          "content-type":"application/json",
          "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      }
    }


    try {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      if (response.ok === true) {
        if (data.get_user_id.length===0){
          onSubmitFailure(data.error_msg)
        }
        else{
          renderApp(data.get_user_id[0].id)
        }
      } else {
        onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      console.error('Error while submitting the form:', error)
    }
  

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
      
        <form className="form-container" onSubmit={submitForm}>
         
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