import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layoutt from "../../components/Layoutt";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [subTotal, setSubtotal] = useState(0);
  const [billPopUp, setBillPopUp] = useState(false);

  const { cartItems } = useSelector((state) => state.rootReducer);

  const handlerIncrement = (record) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { ...record, quantity: record.quantity + 1 },
    });
  };

  const handlerDecrement = (record) => {
    if (record.quantity !== 1) {
      dispatch({
        type: "UPDATE_CART",
        payload: { ...record, quantity: record.quantity - 1 },
      });
    }
  };

  const handlerDelete = (record) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: record,
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height={60} width={60} />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <MinusCircleOutlined
            className="cart-minus"
            onClick={() => handlerDecrement(record)}
          />
          <strong className="cart-quantity">{record.quantity}</strong>
          <PlusCircleOutlined
            className="cart-plus"
            onClick={() => handlerIncrement(record)}
          />
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (id, record) => (
        <DeleteOutlined
          className="cart-action"
          onClick={() => handlerDelete(record)}
        />
      ),
    },
  ];

  useEffect(() => {
    let temp = 0;
    cartItems.forEach(
      (product) => (temp = temp + product.price * product.quantity)
    );
    setSubtotal(temp);
  }, [cartItems]);

  return (
    <Layoutt>
      <h2>Cart</h2>
      <Table dataSource={cartItems} columns={columns} />
      <div className="subTotal">
        <h2>
          Sub Total : <span>$ {(subTotal).toFixed(2)}</span>
        </h2>
        <Button onClick={() => navigate("/success")}>Pay Now!</Button>
      </div>
    </Layoutt>
  );
};

export default Cart;
