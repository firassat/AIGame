import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlgoGame from "./print/AlgoGame.jsx";
import DisLevel from "./DisLevel.jsx";
import UserGame from "./print/UserGame.jsx";
import ChooseLogic from "./ChooseLogic.jsx";
import { store } from "./store";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "chooseLogic",
    element: <ChooseLogic />,
  },
  {
    path: "algoGame",
    element: <AlgoGame />,
  },
  {
    path: "dis",
    element: <DisLevel />,
  },
  {
    path: "userGame",
    element: <UserGame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
