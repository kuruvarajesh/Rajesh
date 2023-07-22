import React from 'react'

const Last3Transactions = (props) => {
    console.log(props.data)
  return (
    <ul>
        {props.data.map((last)=>(
            <li>last.name</li>
        ))}
    </ul>
  )
}

export default Last3Transactions