import React from 'react'
import Header from '../Header'
import SignupSigninComponent from '../SignupSignin'

const Signup = () => {
  return (
    <div>
        <Header />
        <div className='wrapper'>
          <SignupSigninComponent />
        </div>
    </div>
  )
}

export default Signup