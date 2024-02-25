import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import schemaContent from "./schemas/main.sql?raw";
import { DBProvider } from "@vlcn.io/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <DBProvider
    dbname="my-db"
    schema={{ name: "main.sql", content: schemaContent }}
    Render={() => (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )}
  />,
);
