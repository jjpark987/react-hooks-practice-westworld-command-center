import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, currentHost, onHandleHostClick }) {
  return (
    <Card
      className={host === currentHost ? "host selected" : "host"}
      onClick={() => onHandleHostClick(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
