import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Category from "./pages/Category";

function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayouts/>}>
          <Route path="/" element={<Home/>} />
            <Route path="/Registration" element={<Registration/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Forgot" element={<Forgot/>}/>
          <Route path="/Reset" element={<Reset/>}/>
          <Route path="/cat" element={<Category/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
