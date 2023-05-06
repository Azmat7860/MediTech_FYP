import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div>
      <main id="main">
        <Breadcrumb/>

        {/* <!-- ======= Blog Section ======= --> */}
        <section id="blog" class="blog">
          <div class="container" data-aos="fade-up">
            <div class="row gy-4 posts-list">
              <div class="col-xl-4 col-md-6">
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
                      <p class="post-author-list">Maria Doe</p>
                      <p class="post-date">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div class="col-xl-4 col-md-6">
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
                      src="assets/img/blog/blog-author-2.jpg"
                      alt=""
                      class="img-fluid post-author-img flex-shrink-0"
                    />
                    <div class="post-meta">
                      <p class="post-author-list">Allisa Mayer</p>
                      <p class="post-date">
                        <time dateTime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div class="col-xl-4 col-md-6">
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
                      src="assets/img/blog/blog-author-3.jpg"
                      alt=""
                      class="img-fluid post-author-img flex-shrink-0"
                    />
                    <div class="post-meta">
                      <p class="post-author-list">Mark Dower</p>
                      <p class="post-date">
                        <time dateTime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div class="col-xl-4 col-md-6">
                <article>
                  <div class="post-img">
                    <img
                      src="assets/img/blog/blog-4.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <p class="post-category">Sports</p>

                  <h2 class="title">
                    <Link to="/blog-item">
                      Non rem rerum nam cum quo minus olor distincti
                    </Link>
                  </h2>

                  <div class="d-flex align-items-center">
                    <img
                      src="assets/img/blog/blog-author-4.jpg"
                      alt=""
                      class="img-fluid post-author-img flex-shrink-0"
                    />
                    <div class="post-meta">
                      <p class="post-author-list">Lisa Neymar</p>
                      <p class="post-date">
                        <time dateTime="2022-01-01">Jun 30, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div class="col-xl-4 col-md-6">
                <article>
                  <div class="post-img">
                    <img
                      src="assets/img/blog/blog-5.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <p class="post-category">Politics</p>

                  <h2 class="title">
                    <Link to="/blog-item">
                      Accusamus quaerat aliquam qui debitis facilis consequatur
                    </Link>
                  </h2>

                  <div class="d-flex align-items-center">
                    <img
                      src="assets/img/blog/blog-author-5.jpg"
                      alt=""
                      class="img-fluid post-author-img flex-shrink-0"
                    />
                    <div class="post-meta">
                      <p class="post-author-list">Denis Peterson</p>
                      <p class="post-date">
                        <time dateTime="2022-01-01">Jan 30, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div class="col-xl-4 col-md-6">
                <article>
                  <div class="post-img">
                    <img
                      src="assets/img/blog/blog-6.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <p class="post-category">Entertainment</p>

                  <h2 class="title">
                    <Link to="/blog-item">
                      Distinctio provident quibusdam numquam aperiam aut
                    </Link>
                  </h2>

                  <div class="d-flex align-items-center">
                    <img
                      src="assets/img/blog/blog-author-6.jpg"
                      alt=""
                      class="img-fluid post-author-img flex-shrink-0"
                    />
                    <div class="post-meta">
                      <p class="post-author-list">Mika Lendon</p>
                      <p class="post-date">
                        <time dateTime="2022-01-01">Feb 14, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="blog-pagination">
              <ul class="justify-content-center">
                <li>
                  <Link to="/">1</Link>
                </li>
                <li class="active">
                  <Link to="/">2</Link>
                </li>
                <li>
                  <Link to="/">3</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- End Blog Section --> */}
      </main>
    </div>
  );
};

export default Blogs;
