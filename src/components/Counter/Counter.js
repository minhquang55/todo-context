import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  return (
    <div style={{width: "40%", textAlign: 'center'}}>
      <h1 style={{ color: "#087EA4" }}>Count: {count}</h1>
      <button className='btn btn-primary' onClick={increaseCount}>Increase</button>
    </div>
  )
}
