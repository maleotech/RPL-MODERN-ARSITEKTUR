import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0, // state hitung default
    };
  }

  // function menambahkan nilai state
  tambahState = () => {
    this.setState({ hitung: this.state.hitung + 1 })};

  // function mengurangkan nilai state
  kurangState = () => {
    if (this.state.hitung > 0) {    // pastikan nilai state lebih dari 0
      this.setState({ hitung: this.state.hitung - 1 });
    } else {
      alert("Pengurangan State Telah Mencapai Batas")
      this.setState({ hitung: this.state.hitung });
    }};

  render() {
    return (
      <div className="App">
        <h1>Hitung State</h1>
        <h3>Nilai State Sekarang : {this.state.hitung}</h3>
        <p>*nilai state tidak boleh minus</p>
        <button onClick={this.tambahState}>Tambah State</button>
        <button onClick={this.kurangState}>Kurang State</button>
      </div>
    )}}

// class Item extends React.Component {
//   render() {
//     return <h2>This is the item component</h2>;
//   }}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: 'John'}
//   }
//   changeName = () => {
//     this.setState({name: 'Baihaqi'})
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello my name is {this.state.name}</h1>
//         <Item />
//         <button
//           type="button"
//           onClick={this.changeName}>
//           Change Name
//         </button>
//      </div>);
//   }}

// export default App;
