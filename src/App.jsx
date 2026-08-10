import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Chakout from "./pages/Chakout";

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
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/chakout" element={<Chakout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
