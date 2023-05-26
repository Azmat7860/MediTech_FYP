import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  document.documentElement.scrollTop = 0;

  const removecommas = (str) => {
    return  str.slice(1,-1);
    // + str.charAt(0).toUpperCase();
};
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/blog?limit=6&skip=0",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setBlogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Breadcrumb title={"Blog"} />

      {/* <!-- ======= Blog Section ======= --> */}
      <section id="blog" class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4 posts-list">
            {blogs.map((item, key) => (
              <div class="col-xl-4 col-md-6" key={key}>
                <article>
                  <div class="post-img">
                    <img
                      src={`assets/img/blog/blogs-${key+1}.png`}
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <p class="post-category">{removecommas(item.category)}</p>

                  <h2 class="title">
                    <Link to="/blog-item">
                      {removecommas(item.title)}
                    </Link>
                  </h2>

                  <div class="d-flex align-items-center">
                    <img
                      src={`assets/img/blog/comments-${key+1}.jpg`}
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
            ))}
          </div>

          <div class="blog-pagination">
            <ul class="justify-content-center">
              <li class="active">
                <Link to="/">1</Link>
              </li>
              <li>
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
    </div>
  );
};

export default Blogs;
