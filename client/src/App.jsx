import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Addition from "./components/addition";
import Content from "./components/content";
import { useEffect } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [serverResult, setServerResult] = useState(0);

const fetchData = async (value1, value2) => {
  const a = value1 ? value1 : 0
  const b = value2 ? value2 : 0
  const res = await fetch(`http://localhost:3000/${a}/${b}`);
  const data = await res.json();
  return setServerResult(data);
}

useEffect(() => {
  fetchData()
}, [])

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMf7t2i7iuXgtJjtWVuhwpHSRMEhOEBC535-wE-iC&s"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Media Library
          </a>
        </div>
      </nav>
      <Content/>
      <Addition setResult={setResult} fetchData={fetchData}/>
      <div className="container">
      <h5 className="mt-1">Your Addition Result (from server) is: {serverResult}</h5>
      <h5 className="mt-1">Your Addition Result (from ReactJS) is: {result}</h5>
      </div>
    </div>
  );
}

export default App;
