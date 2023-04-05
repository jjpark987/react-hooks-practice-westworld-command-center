import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [allHosts, setAllHosts] = useState([])
  const [allAreas, setAllAreas] = useState([])
  const [currentHost, setCurrentHost] = useState(null)
  const [logMessage, setLogMessage] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
    .then(r => r.json())
    .then(d => setAllHosts(d))

    fetch("http://localhost:3001/areas")
    .then(r => r.json())
    .then(d => setAllAreas(d))
  }, [])

  function handleRadioChange(hostToChange) {
    setAllHosts(allHosts.map(host => host.id === hostToChange.id ? { ...host, active: !host.active } : host))
    setCurrentHost({ ...currentHost, active: !currentHost.active })
    if (!hostToChange.active) {
      setLogMessage({
        type: "warn",
        message: "Activated " + hostToChange.firstName
      })
    } else {
      setLogMessage({
        type: "notify",
        message: "Decommissioned " + hostToChange.firstName
      })
    }
  }

  function handleOptionChange(e, { value }, hostToChange) {
    const areaLimit = allHosts.reduce((total, host) => {
      if (host.area === value) {
        return ++ total
      } else {
        return total
      }
    }, 1)
    const targetArea = allAreas.find(area => area.name === value)
    if (areaLimit > targetArea.limit) {
      setLogMessage({
        type: "error",
        message: "Too many hosts. Cannot add " + hostToChange.firstName + " to " + value
      })
    } else {
      setAllHosts(allHosts.map(host => host.id === hostToChange.id ? { ...host, area: value } : host))
      setCurrentHost({ ...currentHost, area: value })
      setLogMessage({
        type: "notify",
        message: hostToChange.firstName + " set in area " + value
      })
    }
  }

  function handleAllClick(activateAll) {
    if (activateAll) {
      setAllHosts(allHosts.map(host => {
        return { ...host, active: true }
      }))
      setCurrentHost({ ...currentHost, active: true })
    } else {
      setAllHosts(allHosts.map(host => {
        return { ...host, active: false }
      }))
      setCurrentHost({ ...currentHost, active: false })
    }
  }

  return (
    <Segment id="app">
      <WestworldMap 
        hosts={allHosts} 
        areas={allAreas} 
        currentHost={currentHost} 
        onHandleHostClick={host => setCurrentHost(() => host)}
      />
      <Headquarters 
        hosts={allHosts} 
        areas={allAreas}
        currentHost={currentHost} 
        onHandleHostClick={host => setCurrentHost(() => host)} 
        onHandleRadioChange={handleRadioChange} 
        onHandleOptionChange={handleOptionChange}
        onHandleAllClick={handleAllClick}
        logMessage={logMessage}
      />
    </Segment>
  );
}

export default App;
