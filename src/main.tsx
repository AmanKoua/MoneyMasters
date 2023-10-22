import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ProfileContextProvider } from "./Context/ProfileContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </React.StrictMode>
);
