import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/index.jsx";
import Error from "./pages/Error.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-neutral-950">
        <Routes>
          <Route path={"/"} element={<Index />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
