import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({ hosts, currentHost, onHandleHostClick }) {
  const inactiveHosts = hosts.filter(host => !host.active)

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList 
          hosts={inactiveHosts} 
          currentHost={currentHost} 
          onHandleHostClick={onHandleHostClick} 
        />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
