import * as React from "react"
const CreditIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <circle cx={15} cy={15} r={14} stroke="#16DBAA" strokeWidth={2} />
    <path
      fill="#16DBAA"
      d="M15.53 9.97a.75.75 0 0 0-1.06 0l-4.773 4.773a.75.75 0 0 0 1.06 1.06L15 11.561l4.243 4.242a.75.75 0 0 0 1.06-1.06L15.53 9.97ZM15.75 21V10.5h-1.5V21h1.5Z"
    />
  </svg>
)
export default CreditIcon
