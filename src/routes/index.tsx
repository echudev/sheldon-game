import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TokenPicker from "../components/TokenPicker";
import TokenBattle from "../components/TokenBattle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TokenPicker />,
      },
      {
        path: "tokenpicker",
        element: <TokenPicker />,
      },
      {
        path: "tokenbattle/",
        element: <TokenBattle />,
      },
    ],
  },
]);

export default router;
