import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </Provider>
);
