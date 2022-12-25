import { createBrowserRouter } from "react-router-dom";
import GameView from "./components/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GameView />,
  },
]);

export default router;
