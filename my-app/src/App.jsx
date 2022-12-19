import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponent } from "./components";

const App = () => {
  const [menus, setMenus] = useState([]);
  const [selectedCategory, setSelectedCategories] = useState("Food");

  useEffect(() => {
    fetch(`http://localhost:8000/products?category.nama=${selectedCategory}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        setMenus(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const changeCategory = (value) => {
    setSelectedCategories(value);
    setMenus([]);

    fetch(`http://localhost:8000/products?category.nama=${value}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        setMenus(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories changeCategory={changeCategory} selectedCategory={selectedCategory} />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
              <Row>
                {menus &&
                  menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
              </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
