import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SpecialityCard from '../components/SpecialityCard'
import { useState } from 'react';

const Speciality = () => {
  const [cards, setCards] = useState(Array(10).fill(null));

  return (
    <div>
         <Breadcrumb />
      <section id="medicine" className="medicine section-bg mt-3">
        <div className="container">
          <div className="row">
            {cards.map((_, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <SpecialityCard />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Speciality