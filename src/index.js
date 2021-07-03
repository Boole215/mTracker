import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

if (!("Notification" in window)) {
  alert("This Browser does not support desktop notifications");
} else if (Notification.permission === "granted") {
  // do nothing
} else {
  Notification.requestPermission().then((permission) => {
    console.log("Given the following permission", permission);
    if (permission !== "granted") {
      alert(
        "Enable notifications if you'd like to be notified when a new chapter comes out!"
      );
    }
  });
}
