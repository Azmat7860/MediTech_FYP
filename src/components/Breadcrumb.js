import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, subtitle, subtitle2 ,length}) => {
  return (
    <div>
      <div class="breadcrumbs">
        <div
          class="page-header d-flex align-items-center"
          style={{ backgroundImage: "url('')" }}
        >
          <div class="container position-relative">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 text-center mt-3">
                {/* {subtitle ? <h2>{subtitle}</h2> : <h2>{title}</h2>} */}
                {subtitle2 ? (
                  <h2>{subtitle2}</h2>
                ) : subtitle ? (
                  <h2>{subtitle}</h2>
                ) : (
                  <h2>{title}</h2>
                )}
                <p>
                 {length && (
                  length
                 )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              {title && (
                <li>
                  <Link to="/blogs">{title}</Link>
                </li>
              )}
              {subtitle && (
                <li>
                  <Link to="/blog-item">{subtitle}</Link>
                </li>
              )}

              {subtitle2 && (
                <li>
                  <Link to="/">{subtitle2}</Link>
                </li>
              )}
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
