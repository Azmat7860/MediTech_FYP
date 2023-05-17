import React from 'react'
import { Link } from 'react-router-dom'

const MedicalStoreCard = () => {
  return (
    <div><div class="card h-100 my-3">
    <img src={"image"} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{"title"}</h5>
      <p class="card-text">
       {"description"}
      </p>
    </div>
    <div class="card-footer">
      <Link to="/" class="btn btn-success">
        Read More
      </Link>
    </div>
  </div></div>
  )
}

export default MedicalStoreCard