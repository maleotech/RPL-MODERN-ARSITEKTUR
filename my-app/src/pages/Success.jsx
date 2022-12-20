import axios from "axios";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Success = () => {
  axios
    .get("http://localhost:8000/keranjangs")
    .then((res) => {
      const keranjangs = res.data;
      keranjangs.map(function (item) {
        return axios
          .delete(`http://localhost:8000/keranjangs/${item.id}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      });
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="mt-4 text-center">
      <Image src="assets/images/success.png" width="500" />
      <h2>Sukses Pesan</h2>
      <p>Terima Kasih telah Memesan</p>
      <Button variant="primary" as={Link} to="/">
        Back
      </Button>
    </div>
  );
};

export default Success;
