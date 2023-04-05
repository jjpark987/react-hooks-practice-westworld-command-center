import React from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ areas, currentHost, onHandleRadioChange, onHandleOptionChange }) {
  const options = areas.map(area => {
    return {
      key: area.name,
      text: area.name.split("_").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" "),
      value: area.name
    }
  })

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={currentHost.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {currentHost.firstName} | {currentHost.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={() => onHandleRadioChange(currentHost)}
                label={currentHost.active ? "Active" : "Decommissioned"}
                checked={currentHost.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={(e, { value }) => onHandleOptionChange(e, { value }, currentHost)}
              value={currentHost.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
