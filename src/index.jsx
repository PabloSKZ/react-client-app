import React from "react";
import ReactDOM from "react-dom";
import Clients from "./components/Clients";
import faker from "faker";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Clients />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
