import React from 'react'
import SigninRegistrationButton from '../SigninRegistrationButton/SigninRegistrationButton'

function NavigationBar() {
  return (
    <div className='bg-neutral rounded-lg flex flex-row justify-between'>
      <h1 className='text-white'>Collaborative Task Management</h1>
      <SigninRegistrationButton />
    </div>
  )
}

export default NavigationBar