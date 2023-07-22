import React from 'react'
import Header from '../Header/Header'
import AppBody from '../AppBody/AppBody'

import './Main.css'

const Main = (props) => {
  console.log(props.tab)
  if (props.tab===0){
    return(
      <div className='main-body'>
        {/* <> */}
        <Header header={"Accounts"} tabsOpen={false}/>
        {/* </> */}
        {/* <div  style={{flex:1}} > */}
        <AppBody />
        {/* </div> */}
      </div>
    )
  }
  else if (props.tab==1){
    return(
      <div  className='main-body'>
        <Header header={"Transactions"} tabsOpen={true}/>
        <AppBody />
      </div>
    )
  }
  else {
    return (
    <div className='main-body'>
    <Header header={"Profile"} tabsOpen={false}/>
    <AppBody />
    </div>
  )}
}

export default Main