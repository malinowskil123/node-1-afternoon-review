import React from "react";
import List from "./components/List";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">{"RESTful ToDo List!"}</header>
      <List />
    </div>
  );
};

export default App;
