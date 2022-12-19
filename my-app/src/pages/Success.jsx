import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="mt-4 text-center">
        <Image src="assets/images/success.png" width="500" />
        <h2>Sukses Pesan</h2>
        <p>Terima Kasih telah Memesan</p>
        <Button variant="primary" as={Link} to='/'>
            Back
        </Button>
    </div>
  )
};

export default Success;
