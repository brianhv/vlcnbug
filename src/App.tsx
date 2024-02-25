import { useSync } from "@vlcn.io/react";
import SyncWorker from "./sync-worker.js?worker";

function getEndpoint() {
  let proto = "ws:";
  const host = window.location.host;
  if (window.location.protocol === "https:") {
    proto = "wss:";
  }

  return `${proto}//${host}/sync`;
}

const worker = new SyncWorker();

function App() {
  useSync({ dbname: "my-db", endpoint: getEndpoint(), room: "my-db", worker });

  return (
    <div className="App">
      <div id="appContainer"></div>
    </div>
  );
}

export default App;
