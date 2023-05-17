import React from 'react'
import { Link } from 'react-router-dom'

const Doctor = () => {
  return (
    <div>
         <main id="main" class="main">
        <div class="pagetitle">
          <h1>Doctor</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active">Doctor</li>
            </ol>
          </nav>
        </div>
        </main>
    </div>
  )
}

export default Doctor