import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

function Details({ areas, currentHost, onHandleRadioChange, onHandleOptionChange }) {
  return (
    <Segment id="details" className="HQComps">
      {!currentHost ? 
        <Image size="medium" src={Images.westworldLogo} /> : 
        <HostInfo 
          areas={areas} 
          currentHost={currentHost} 
          onHandleRadioChange={onHandleRadioChange}
          onHandleOptionChange={onHandleOptionChange} 
        />
      }
    </Segment>
  );
}

export default Details;
