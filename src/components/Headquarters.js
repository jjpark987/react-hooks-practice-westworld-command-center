import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel"

function Headquarters({ hosts, areas, currentHost, onHandleHostClick, onHandleRadioChange, onHandleOptionChange, onHandleAllClick, logMessage }) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
          hosts={hosts} 
          currentHost={currentHost} 
          onHandleHostClick={onHandleHostClick} 
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
          areas={areas}
          currentHost={currentHost} 
          onHandleRadioChange={onHandleRadioChange} 
          onHandleOptionChange={onHandleOptionChange}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel 
          onHandleAllClick={onHandleAllClick}
          logMessage={logMessage}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
