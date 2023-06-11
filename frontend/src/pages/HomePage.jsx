import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
      <div className='bg-light p-5 mt-4 rounded-3'>
              <h1>Welcome to a simple POS system</h1>
              <p>Click the start button to proceed on a POS page</p>
              <Link to='/pos' className='btn btn-primary'> Click here to sell product </Link>
            </div>
    </MainLayout>
  )
}


export default HomePage