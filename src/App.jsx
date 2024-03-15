import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";

function App() {

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-950">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"*"} element={<Error/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
