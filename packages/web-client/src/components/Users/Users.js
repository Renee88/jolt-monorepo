import React from 'react'
import ReactDOM from 'react-dom'

const Users = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Users

const wrapper = document.getElementById("root")
wrapper ? ReactDOM.render(<Users/>, wrapper) : false