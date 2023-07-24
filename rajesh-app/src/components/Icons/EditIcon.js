import * as React from "react"
const EditIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    style={{ cursor: "pointer" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#2D60FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 1.667 18.333 5M1.667 18.333l1.063-3.9c.07-.254.104-.381.158-.5.047-.105.105-.206.173-.299.077-.105.17-.198.356-.385l8.611-8.611c.165-.165.248-.247.343-.278a.417.417 0 0 1 .258 0c.095.03.177.113.342.278l2.39 2.39c.166.166.248.248.28.343a.417.417 0 0 1 0 .258c-.032.095-.114.177-.28.342l-8.61 8.611c-.187.187-.28.28-.385.357a1.667 1.667 0 0 1-.3.173 3.498 3.498 0 0 1-.5.158l-3.9 1.063Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default EditIcon
