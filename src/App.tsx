import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";

const App: FC = () => (
  <Layout>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </Layout>
);

export default App;
