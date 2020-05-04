import React from "react";
import faker from "faker";
import Client from "../Client";

class Clients extends React.Component {
  render() {
    let clientList = [];
    for (let i = 0; i < 100; i++) {
      let data = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email:
          faker.name.firstName().toLowerCase() +
          faker.name.lastName().toLowerCase() +
          "@gmail.com",
        phoneNumber: faker.phone.phoneNumberFormat(0),
        picture: faker.image.avatar(),
        job: faker.name.jobTitle(),
      };
      clientList.push(data);
    }

    let clients = clientList.map((client) => (
      <Client
        firstName={client.firstName}
        lastName={client.lastName}
        email={client.email}
        phoneNumber={client.phoneNumber}
        picture={client.picture}
        job={client.job}
      />
    ));

    return <>{clients}</>;
  }
}

export default Clients;
