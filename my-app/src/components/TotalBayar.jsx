import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const TotalBayar = ({ keranjangs }) => {
  const navigate = useNavigate()
  const submitTotalHarga = (totalHarga) => {
    const pesanan = {
      totalHarga: totalHarga,
      menu: keranjangs,
    };
    axios.post("http://localhost:8000/pesanans", pesanan).then((res) => {
      navigate("/success");
    });
  }
  const totalHarga = keranjangs.reduce(function (result, item) {
    return result + item.totalHarga;
  }, 0)

  return (
    <div className="fixed-bottom">
      <Row>
        <Col md={{ span: 3, offset: 9 }} className="px-4">
          <h4>
            <strong>Total harga : Rp. {numberWithCommas(totalHarga)}</strong>
          </h4>
          <Button
            variant="primary"
            block="true"
            className="mb-2 mt-2 mr-2"
            onClick={() => submitTotalHarga(totalHarga)}
          >
            Bayar Sekarang
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TotalBayar;
