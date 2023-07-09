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
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  {/* <DataTable
                    columns={columns}
                    data={caretakers}
                    pagination
                    highlightOnHover
                    selectableRows
                    subHeader
                    subHeaderComponent={
                      <input
                        type="text"
                        placeholder="Search here"
                        className="form-control my-3"
                        style={{ width: "35%" }}
                      />
                    }
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
    </div>
  )
}

export default Doctor