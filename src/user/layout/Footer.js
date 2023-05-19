import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       {/* <!-- ======= Footer ======= --> */}
       <footer id="footers" className="footers">
        <div class="copyrights">
          &copy; Copyright
          <strong>
            <span>MediTech</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <Link tp="/">MediTech</Link>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </div>
  )
}

export default Footer