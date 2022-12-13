import "./App.css";

const Item = (props) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>City : {props.city}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Item name='Cristiano Ronaldo' city='Lisbon' />
      <Item name='Harry Maguire' city='London' />
      <Item name='Raphael Varane' city='Paris' />
    </div>
  );
};

export default App;
