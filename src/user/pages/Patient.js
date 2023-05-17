import React from 'react'
import { Link } from 'react-router-dom'

const Patient = () => {
  return (
    <div>
         <main id="main" class="main">
        <div class="pagetitle">
          <h1>Patient</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active">Patient</li>
            </ol>
          </nav>
        </div>
        </main>
    </div>
  )
}

export default Patient