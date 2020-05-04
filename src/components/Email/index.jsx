import React from "react";

class Email extends React.Component {
  render() {
    let { email } = this.props;

    return (
      <a href={`mailto:${email}`} className="btn btn-primary m-1">
        Envoyer un email
      </a>
    );
  }
}

export default Email;
