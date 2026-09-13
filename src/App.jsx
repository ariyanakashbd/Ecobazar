import { Routes, Route } from "react-router-dom";
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
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import SingleBlog from "./pages/SingleBlog";
import Wishilst from "./pages/Wishilst";

function App() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cat" element={<Category />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chakout" element={<Chakout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/wishlist" element={<Wishilst />} />
      </Route>
    </Routes>
  );
}

export default App;