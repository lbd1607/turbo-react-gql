import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { Route, Routes } from "react-router-dom";
import environment from "../RelayEnv";
import Nav from "./app/components/Nav";
import Users from "./app/pages/users";
import "./index.css";

const runtimeErrorOverlay = (err: any) => {
  // must be within function call because that's when the element is defined for sure.
  const ErrorOverlay = customElements.get("vite-error-overlay");

  // don't open outside vite environment
  if (!ErrorOverlay) {
    return;
  }

  const errorMessage = err.message ? `Runtime error: ${err.message} ` : "";
  const errorFilename = err.fileName ? `In ${err.fileName} ` : "";
  const errorColumnNumber = err.columnNumber
    ? `On column ${err.columnNumber} `
    : "";
  const errorLineNumber = err.lineNumber ? `On line ${err.lineNumber}. ` : "";
  const errorStacktrace = err.stack ? `\n\nStack trace: ${err.stack}` : "";

  const formattedError = (
    errorMessage +
    errorFilename +
    errorColumnNumber +
    errorLineNumber +
    errorStacktrace
  ).trim();

  console.error(formattedError);

  const overlay = new ErrorOverlay(err);

  document.body.appendChild(overlay);
};

if (import.meta.env.DEV) {
  window.addEventListener("error", ({ error }) => runtimeErrorOverlay(error));
}

function App() {
  return (
    <Suspense fallback={null}>
      <RelayEnvironmentProvider environment={environment}>
        <div className="App">
          <header>
            <Nav />
          </header>
          <div className="flex m-10 justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </RelayEnvironmentProvider>
    </Suspense>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <h1 className="text-6xl">Welcome!</h1>
    </div>
  );
};
