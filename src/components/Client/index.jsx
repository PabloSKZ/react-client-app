import React from "react";
import Email from "../Email";
import Phone from "../Phone";

class Client extends React.Component {
  render() {
    let { firstName, lastName, email, phoneNumber, picture, job } = this.props;

    return (
      <div className="card m-2" style={{ width: "28%" }}>
        <img src={picture} className="card-img-top" alt="Avatar" />
        <div className="card-body">
          <h5 className="card-title">
            {firstName} {lastName}
          </h5>
          <p className="card-text">{job}</p>
          <Email email={email} /> <Phone phone={phoneNumber} />
        </div>
      </div>
    );
  }
}

export default Client;
