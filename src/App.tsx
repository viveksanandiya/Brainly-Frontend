import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { SharedBrain } from "./pages/SharedBrain";
import { Home } from "./pages/Home";


function App() {

  return (<BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/share/:hash" element={<SharedBrain/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
