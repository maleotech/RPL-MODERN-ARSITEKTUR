import { useState, useEffect } from "react";

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
    <div className="home">
      {blogs && (
        <div className="blog-list">
          <h2>All Blogs</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <h4>- Written by {blog.author}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
