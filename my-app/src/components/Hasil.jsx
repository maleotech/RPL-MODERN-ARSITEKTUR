import React from "react";
import { Col, ListGroup, Row, Badge } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";

const Hasil = ({ keranjangs }) => {
  return (
    <Col md={3} mt="2">
      <h4>
        <strong>Hasil</strong>
      </h4>
      <hr />
      <ListGroup>
        {keranjangs.map((menuKeranjang) => (
          <ListGroup.Item key={menuKeranjang.id}>
            <Row>
              <Col xs={2}>
                <h3>
                  <Badge pill variant="success">
                    {menuKeranjang.jumlah}
                  </Badge>
                </h3>
              </Col>
              <Col>
                <h5>{menuKeranjang.product.nama}</h5>
                <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
              </Col>
              <Col>
                <strong><p>Rp. {numberWithCommas(menuKeranjang.totalHarga)}</p></strong>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <TotalBayar keranjangs={keranjangs}/>
    </Col>
  );
};

export default Hasil;
