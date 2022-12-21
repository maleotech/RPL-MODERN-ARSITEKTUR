import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Row>
      <h2>All Blogs</h2>
      {blogs && blogs.map((blog) => <BlogList key={blog.id} blog={blog} />)}
      {/* <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2 className="text-3xl font-bold underline">{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div> */}
    </Row>
  );
};

export default Home;
