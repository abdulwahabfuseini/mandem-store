import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import Store from "./Store/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
