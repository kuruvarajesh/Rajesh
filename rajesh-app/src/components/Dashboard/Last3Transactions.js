import React, { useEffect, useState } from 'react'
import DebitIcon from '../Icons/DebitIcon'
import CreditIcon from '../Icons/CreditIcon'
import DebitIconNormal from '../Icons/DebitIconNormal'
import CreditIconNormal from '../Icons/CreditIconNormal'
import last3User from '../Images/last3User.png'
import './Last3Transactions.css'

const Last3Transactions = (props) => {
   const [data,setData] = useState([])

  //  const getTabData = ()=>{
  //     if(props.user==="admin"){
  //       const adminData = 
  //     }
  //  }

  //  useEffect(()=>{
  //   getTabData()
  //  },[])

    
    
const dateObject = (date) =>{
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const options = { month: 'short' };
    const month = dateObj.toLocaleString('en-US', options);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const meridiem = hours >= 12 ? "PM" : "AM";
    // console.log(dateObj)

const formattedDateAndTime = `${day} ${month} ${hours % 12 === 0 ? 12 : hours % 12}:${minutes.toString().padStart(2, '0')} ${meridiem}`; 
return formattedDateAndTime
}

  return (
    <ul className='un-list'>
        {props.data.map((last,index)=>(
          <>
            <li className='list' key={index}>
              <div className='transaction-user-name'>
                <div className='trans-icon'>
              {last.type==="debit"? props.user==="admin"?<DebitIconNormal/>:<DebitIcon />: props.user==="admin"? <CreditIconNormal />: <CreditIcon />}
              </div>
              <img src={last3User} alt="user" className='trans-user'/>
              <p className='trans-desc'>Arlene McCoy</p>
              </div>
              <p className='trans-desc'>{last.transaction_name}</p>
              <p className='trans-desc'>{last.category}</p>
              <p className='trans-desc'>{dateObject(last.date)}</p>
              <p className={last.type==="debit"?"l-debit-amount":"l-credit-amount"}>{last.amount}</p>
            </li>
           {index !== (props.data.length-1) && <hr className='hr-line'/>}
            </>
        ))}
    </ul>
  )
}

export default Last3Transactions