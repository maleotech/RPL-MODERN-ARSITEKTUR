import { Link } from "react-router-dom";
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
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="content">
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <Link to='/'>
            <button className="back">Back</button>
          </Link>
          <button className="delete" onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
