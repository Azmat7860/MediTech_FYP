import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const removecommas = (str) => {
    return  str.slice(1,-1);
    // + str.charAt(0).toUpperCase();
};
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/blog/",
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
      <section id="recent-posts" class="recent-posts sections-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title section-header">
            <h2>Recent Blog Posts</h2>
          </div>

          <div class="row gy-4">
            {blogs.map((item, key) => (
              <div class="col-xl-4 col-md-6 post-box" key={key}>
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
                    <Link to="/blog-item">{removecommas(item.title)}</Link>
                  </h2>

                  <div class="d-flex align-items-center">
                    <img
                      src={`assets/img/blog/comments-${key+1}.jpg`}
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
            ))}
          </div>
        </div>
        <div className="col-md-12 text-center show-link mt-5">
          <Link to="/blogs" className="btn btn-primary btn-sm semi-round">
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RecentBlogs;
