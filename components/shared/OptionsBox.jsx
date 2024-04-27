"use client"


import React from 'react'

const OptionsBox = ({roles, setRole, role}) => {
  return (
    <select value={role}  onChange={e => setRole(e.target.value)}>
      { roles.map((item, index)=>(
       <option key={index} value={item}>
        {item} 
       </option>
      )) }
    </select>
  )
}

export default OptionsBox