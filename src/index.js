// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import App from "./App";
// // // import { Provider } from "react-redux";
// // // import { PersistGate } from "redux-persist/integration/react";
// // // import { store, persistor } from "./redux/store";

// // // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // root.render(
// // //   <Provider store={store}>
// // //     <PersistGate loading={null} persistor={persistor}>
// // //       <App />
// // //     </PersistGate>
// // //   </Provider>
// // // );

// // // index.js
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import { Provider } from "react-redux";
// // import { PersistGate } from "redux-persist/integration/react";
// // import { store, persistor } from "./redux/store";

// // import { PublicClientApplication } from "@azure/msal-browser";
// // import { MsalProvider } from "@azure/msal-react";
// // import { msalConfig } from "../src/msalConfig";
// // import "./index.css";

// // const msalInstance = new PublicClientApplication(msalConfig);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(
// //   <Provider store={store}>
// //     <PersistGate loading={null} persistor={persistor}>
// //       <MsalProvider instance={msalInstance}>
// //         <App />
// //       </MsalProvider>
// //     </PersistGate>
// //   </Provider>
// // );

// // index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./redux/store";

// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "./msalConfig";
// import "./index.css";

// const msalInstance = new PublicClientApplication(msalConfig);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <MsalProvider instance={msalInstance}>
//           <App />
//         </MsalProvider>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./msalConfig";
import "./index.css";

// Only create MSAL instance if crypto API is available
let msalInstance = null;
if (typeof window !== "undefined" && window.crypto && window.crypto.subtle) {
  msalInstance = new PublicClientApplication(msalConfig);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {msalInstance ? (
        <MsalProvider instance={msalInstance}>
          <App />
        </MsalProvider>
      ) : (
        <App />
      )}
    </PersistGate>
  </Provider>
);
