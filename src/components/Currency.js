import React, { useState } from 'react'

const Currency = () => {
    const [currency,setCurrency] = useState('')
  return (
    <div className='alert alert-secondary'>
        <span>Currency </span>
        <select className="styled-dropdown border-0 bg-transparent outline-none fw-bold" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value) }>
            {/* <option defaultValue>Currency ({currency})</option> */}
            <option value="Dollar" name="Dollar">$ Dollar</option>
            <option value="Pound" name="Pound">£ Pound</option>
            <option value="Euro" name="Euro">€ Euro</option>
            <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
        </select>
    </div>
  )
}

export default Currency;