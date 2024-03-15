import './App.css'
import {Route, Routes} from "react-router-dom";
import Index from "./pages/index.jsx";
import Error from "./pages/Error.jsx";
import Landing from "./pages/Landing.jsx";

function App() {

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-950">
        <Routes>
          <Route path={"/"} element={<Landing/>}/>
          <Route path={"/home"} element={<Index/>}/>
          <Route path={"*"} element={<Error/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
