import React from 'react'

export default function Counter({ counter, onIncrementClick, onDecrementClick }) {
  return (
    <div>
      <span>Counter: {counter}</span>
      <button onClick={onIncrementClick}>+</button>
      <button onClick={onDecrementClick}>-</button>
    </div>
  )
}
