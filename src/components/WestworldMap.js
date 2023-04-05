import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ hosts, areas, currentHost, onHandleHostClick }) {
  return (
    <Segment id="map">
      {areas.map(area => 
        <Area 
          key={area.id} 
          hosts={hosts} 
          area={area} 
          currentHost={currentHost} 
          onHandleHostClick={onHandleHostClick} 
        />
      )}
    </Segment>);
}

export default WestworldMap;
