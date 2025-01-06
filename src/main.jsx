import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-7qvxwgph4l6pqoni.us.auth0.com"
     clientId="1N4GK4jTsc1W2o8CCs9QnELBnTp1BHRx"
     authorizationParams={{
      redirect_uri: "https://castlewall.in"
     }}
     audience="https://api.castlewall.in"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
