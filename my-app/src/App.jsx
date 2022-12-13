import "./App.css";

const Item = () => {
  return (
    <div>
      <h4>Session h#1</h4>
      <p>Introduction to JSX</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default App;
