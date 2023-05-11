import React from "react";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  return (
    <div>
      <section id="recent-posts" class="recent-posts sections-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title section-header">
            <h2>Recent Blog Posts</h2>
            {/* <p>
              Consequatur libero assumenda est voluptatem est quidem illum et
              officia imilique qui vel architecto accusamus fugit aut qui
              distinctio
            </p> */}
          </div>

          <div class="row gy-4">
            <div class="col-xl-4 col-md-6 post-box">
              <article>
                <div class="post-img">
                  <img
                    src="assets/img/blog/blog-1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <p class="post-category">Politics</p>

                <h2 class="title">
                  <Link to="/blog-item">
                    Dolorum optio tempore voluptas dignissimos
                  </Link>
                </h2>

                <div class="d-flex align-items-center">
                  <img
                    src="assets/img/blog/blog-author.jpg"
                    alt=""
                    class="img-fluid post-author-img flex-shrink-0"
                  />
                  <div class="post-meta">
                    <p class="post-author">Maria Doe</p>
                    <p class="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div class="col-xl-4 col-md-6 post-box">
              <article>
                <div class="post-img">
                  <img
                    src="assets/img/blog/blog-2.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <p class="post-category">Sports</p>

                <h2 class="title">
                  <Link to="/blog-item">
                    Nisi magni odit consequatur autem nulla dolorem
                  </Link>
                </h2>

                <div class="d-flex align-items-center">
                  <img
                    src="assets/img/blog/comments-2.jpg"
                    alt=""
                    class="img-fluid post-author-img flex-shrink-0"
                  />
                  <div class="post-meta">
                    <p class="post-author">Allisa Mayer</p>
                    <p class="post-date">
                      <time dateTime="2022-01-01">Jun 5, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div class="col-xl-4 col-md-6 post-box">
              <article>
                <div class="post-img">
                  <img
                    src="assets/img/blog/blog-3.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <p class="post-category">Entertainment</p>

                <h2 class="title">
                  <Link to="/blog-item">
                    Possimus soluta ut id suscipit ea ut in quo quia et soluta
                  </Link>
                </h2>

                <div class="d-flex align-items-center">
                  <img
                    src="assets/img/blog/comments-3.jpg"
                    alt=""
                    class="img-fluid post-author-img flex-shrink-0"
                  />
                  <div class="post-meta">
                    <p class="post-author">Mark Dower</p>
                    <p class="post-date">
                      <time dateTime="2022-01-01">Jun 22, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center show-link mt-5">
          <Link
            to="/blogs"
            className="btn btn-primary btn-sm semi-round"
          >
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RecentBlogs;
