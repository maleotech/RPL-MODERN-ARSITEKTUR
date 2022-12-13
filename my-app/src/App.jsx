import "./App.css";
import React from "react";

class Item extends React.Component {
  render() {
    return <h2>This is the item component</h2>;
  }}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'John'}
  }
  changeName = () => {
    this.setState({name: 'Baihaqi'})
  }
  render() {
    return (
      <div className="App">
        <h1>Hello my name is {this.state.name}</h1>
        <Item />
        <button
          type="button"
          onClick={this.changeName}>
          Change Name
        </button>
     </div>);
  }}

export default App;
