import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const BlogList = ({ blog }) => {
  return (
    <Col md={4} xs={6} className="mt-3">
      <Card key={blog.id}>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Written by {blog.author}
          </Card.Subtitle>
          <Card.Text>{blog.body.slice(0, 35)} ...</Card.Text>
          <Link to={`/blogs/${blog.id}`}>See Details</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogList;
