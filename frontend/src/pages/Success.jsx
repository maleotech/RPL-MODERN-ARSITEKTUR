import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Svg } from "./success.svg";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success">
      <Svg width="400" />
      <h2>Your Order Has Been Submitted'</h2>
      <p>The Store Will Deliver The Product</p>
      <Button
        variant="primary"
        onClick={() => [navigate("/"), window.location.reload()]}
      >
        Back
      </Button>
    </div>
  );
};

export default Success;