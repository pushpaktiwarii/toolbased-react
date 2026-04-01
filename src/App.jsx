import { useState } from "react";

function App() {
  const name = "Aman";
  let x = 10;
  let y = 20;

  function fun() {
    return "inside function";
  }

  function sum(a, b) {
    return a + b;
  }

  function handleClick1() {
    alert("Sebb!");
  }
  function handleClick2() {
    alert("Kelaaaa!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1>User variable with jsx </h1>
      <h2>Value of variable is : {name}</h2>
      <h3>{fun()}</h3>
      <h3>example if paramiterized function {sum(x, y)}</h3>

      <button onClick={handleClick1}>Apple</button>
      <button onClick={handleClick2}>Banana</button>
      
    </div>
  );
}

export default App;