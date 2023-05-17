import React from 'react'
import { Link } from 'react-router-dom'

const MedicalStore = () => {
  return (
    <div>
         <main id="main" class="main">
        <div class="pagetitle">
          <h1>Medical Store</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active">Medical Store</li>
            </ol>
          </nav>
        </div>
        </main>
    </div>
  )
}

export default MedicalStore