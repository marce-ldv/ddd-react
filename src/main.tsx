import "@abraham/reflection";
import React from "react";
import ReactDOM from "react-dom/client";
import Movies from "./web/features/movies";
import {
  buildContainer,
  Implementations,
} from "./lib/shared/infrastructure/dependencyInjection/container";

buildContainer(Implementations.Fake);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>
);
