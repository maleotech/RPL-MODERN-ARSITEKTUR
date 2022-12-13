import "./App.css";
import React from "react";
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("laki-laki")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataDiri = { name, age, gender }
  }

  return (
    <div className="create">
      <h2>Isi data diri anda</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nama anda:</label>
        <input 
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Umur anda:</label>
        <input 
          type="number"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Jenis Kelamin:</label>
        <select value={gender} onChange={(e) => {setGender(e.target.value)}}>
          <option value="laki-laki">Laki-laki</option>
          <option value="perempuan">Perempuan</option>
        </select>
        <label>Hobi:</label>
        <textarea />
        <button>Submit Data</button>
      </form>
    </div>
  )
}

export default Form;
