import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blogs, setBlogs] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/blogs/" + id)
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

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blogs.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
