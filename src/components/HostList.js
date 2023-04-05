import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hosts, currentHost, onHandleHostClick }) {
  return (
    <Card.Group itemsPerRow={6}>{hosts.map(host => 
      <Host 
        key={host.id} 
        host={host} 
        currentHost={currentHost} 
        onHandleHostClick={onHandleHostClick} 
      />
    )}</Card.Group>
  );
}

export default HostList;
