import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus } from "../components";
import axios from "axios";
import swal from "sweetalert";

const Home = (props) => {
  const [menus, setMenus] = useState([]);
  const [selectedCategory, setSelectedCategories] = useState("Food");
  const [keranjangs, setKeranjangs] = useState([]);

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

    fetch("http://localhost:8000/keranjangs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        const keranjangs = data;
        setKeranjangs(keranjangs);
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

  const masukKeranjang = (value) => {
    axios
      .get(`http://localhost:8000/keranjangs?product.id=${value.id}`)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            totalHarga: value.harga,
            product: value,
            timer: 1500,
          };

          axios
            .post("http://localhost:8000/keranjangs", keranjang)
            .then(() => {
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                button: false,
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            totalHarga: res.data[0].totalHarga + value.harga,
            product: value,
          };

          axios
            .put(
              `http://localhost:8000/keranjangs/${res.data[0].id}`,
              keranjang
            )
            .then(() => {
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                button: false,
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="mt-3">
      <Container fluid>
        <Row>
          <ListCategories
            changeCategory={changeCategory}
            selectedCategory={selectedCategory}
          />
          <Col>
            <h4>
              <strong>Daftar Produk</strong>
            </h4>
            <hr />
            <Row>
              {menus &&
                menus.map((menu) => (
                  <Menus
                    key={menu.id}
                    menu={menu}
                    masukKeranjang={masukKeranjang}
                  />
                ))}
            </Row>
          </Col>
          <Hasil keranjangs={keranjangs} {...props} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
