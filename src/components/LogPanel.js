import React, { useEffect, useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ onHandleAllClick, logMessage }) {
  const [showActivateAll, setShowActivateAll] = useState(true)
  const [logs, setLogs] = useState([
    Log.error("This is an example of an error log"),
    Log.warn("This is an example of a warn log"),
    Log.notify("This is an example of a notify log")
  ])

  useEffect(() => {
    if (logMessage) {
      switch (logMessage.type) {
        case "notify":
          setLogs(prevLogs => [ Log.notify(logMessage.message), ...prevLogs ])
          break
        case "warn":
          setLogs(prevLogs => [ Log.warn(logMessage.message), ...prevLogs ])
          break
        case "error": 
          setLogs(prevLogs => [ Log.error(logMessage.message), ...prevLogs ])
          break
        default:
          break
      }
    }
  }, [logMessage])

  function handleAllButton() {
    showActivateAll ? onHandleAllClick(showActivateAll) : onHandleAllClick(showActivateAll)
    setShowActivateAll(() => !showActivateAll)
    if (showActivateAll) {
      setLogs([ Log.warn("Activated all hosts!"), ...logs ])
    } else {
      setLogs([ Log.notify("Decommissioned all hosts!"), ...logs ])
    }
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>
      <Button 
        fluid color={showActivateAll ? "red" : "green"} 
        content={showActivateAll ? "ACTIVATE ALL" : "DECOMMISSION ALL"} 
        onClick={handleAllButton}
      />
    </Segment>
  );
}

export default LogPanel;
