import React from 'react'
import { Link } from 'react-router-dom'

const Medicine = () => {
  return (
    <div>
         <main id="main" class="main">
        <div class="pagetitle">
          <h1>Medicine</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active">Medicine</li>
            </ol>
          </nav>
        </div>
        </main>
    </div>
  )
}

export default Medicine