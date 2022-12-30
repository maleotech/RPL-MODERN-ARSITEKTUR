import React from 'react';
import { useState } from "react";
import ModalComponent from "./component/Modal";
import './App.css';

const App = () => {
  const [show, setShow] = useState(false);
  const [menus, setMenus] = useState("Silakan pilih Menu terlebih dahulu")
  const chidlren = "Message in Modal from Parent Component";

  const changeModal = () => {
    setShow(!show);
  };

  const updateMenu = (menu) => {
    setMenus(menu)
  }

  return (
    <div className="App">
      <h1>Selamat Datang, Silakan Pilih Menu</h1>
      <ModalComponent show={show} message={chidlren} changeModal={changeModal} updateMenu={updateMenu}/>
      <button onClick={() => changeModal()}>Pilih Menu Makanan</button>
      <div>
        <h1>Menu yang dipilih yaitu</h1>
        <p>{menus}</p>
      </div>
    </div>
  );
};

export default App;



// const Parent = () => {
//   const [data, setData] = useState("Data from Parent")

//   const changeData = (data) => {
//     setData(data)
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <Child changeData={changeData} />
//     </div>
//   )
// }

// const Child = ({ changeData }) => {
//   const dataChild = 'Data from Child'
//   return (
//     <div>
//       <button onClick={() => changeData(dataChild)}>Change Message</button>
//     </div>
//   )
// }

// export default Parent

// const Parent = () => {
//   const data = "data from parent";

//   return (
//     <div>
//       <Child dataParent={data} />
//     </div>
//   );
// };

// const Child = ({ dataParent }) => {
//   return (
//     <div>
//       <h2>{dataParent}</h2>
//     </div>
//   );
// };

// export default Parent;
