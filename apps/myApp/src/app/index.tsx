import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "../../RelayEnv";
import Users from "./pages/users";

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

if (process.env.DEV) {
  window.addEventListener("error", ({ error }) => runtimeErrorOverlay(error));
}

const App = () => {
  return (
    <Suspense fallback={null}>
      <RelayEnvironmentProvider environment={environment}>
        <Users />
      </RelayEnvironmentProvider>
    </Suspense>
  );
};

export default App;
