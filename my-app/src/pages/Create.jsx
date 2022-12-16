import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("cristiano");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author }

    setIsLoading(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {'Content-type' : 'application/json'},
    })
    .then(() => {
      console.log('new blog added');
      setIsLoading(false)
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="cistiano">cristiano</option>
          <option value="messi">messi</option>
        </select>
        { !isLoading && <button>Add Blog</button> }
        { isLoading && <button>Adding blog...</button> }
      </form>
    </div>
  )}

export default Create;
