import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({ show, message, changeModal, updateMenu }) => {
  const [checked, setChecked] = useState([]);
  const menus = [
    "Nasi Goreng",
    "Mie Goreng",
    "Sate Ayam",
    "Nasi Ayam Goreng",
    "Mie Ayam Bakso",
  ];

  const handleOnCheck = (e) => {
    var udpatedMenu = [...checked];
    if (e.target.checked) {
      udpatedMenu = [...checked, e.target.value];
    } else {
      udpatedMenu.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(udpatedMenu);
  };

  const checkedMenus = checked.length
    ? checked.reduce((total, menu) => {
        return total + ", " + menu;
      })
    : "";

  const onButtonClick = () => {
    changeModal();
    updateMenu(checkedMenus)
  };

  if (!show) {
    return null;
  } else {
    return (
      <div>
        <Modal
          appElement={document.getElementById("root")}
          isOpen={show}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>{message}</div>
          {menus.map((menu, index) => (
            <div key={index}>
              <input value={menu} type="checkbox" onChange={handleOnCheck} />
              <span>{menu}</span>
            </div>
          ))}
          <button onClick={() => onButtonClick()}>Selesai</button>
        </Modal>
      </div>
    );
  }
};

export default ModalComponent;
