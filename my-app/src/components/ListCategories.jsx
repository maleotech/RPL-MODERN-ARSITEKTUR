import React, { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { faUtensils, faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ nama }) => {
  if (nama === "Food")
    return <FontAwesomeIcon icon={faUtensils} className="mr-5" />;
  if (nama === "Drink") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Snack")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;
};

const ListCategories = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Col md={2} mt="2">
      <h4>
        <strong>Daftar Kategori</strong>
      </h4>
      <hr />
      <ListGroup>
        {categories &&
          categories.map((category) => (
            <ListGroup.Item
              key={category.id}
              onClick={() => props.changeCategory(category.nama)}
              className={props.selectedCategory === category.nama && "category-aktif"}
              style={{ cursor: "pointer" }}
            >
              <h5>
                <Icon nama={category.nama} /> {category.nama}
              </h5>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Col>
  );
};

export default ListCategories;
