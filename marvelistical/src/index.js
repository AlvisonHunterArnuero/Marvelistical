import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreContextProvider } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<StoreContextProvider>
			<App />
		</StoreContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
