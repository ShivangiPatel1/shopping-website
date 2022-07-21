import { Route, Routes , Navigate} from "react-router-dom";
import AllProduct from "./pages/AllProduct";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Cart from "./pages/Cart";


function App() {
  const user = false;
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<AllProduct />}></Route>
      <Route path="/product/:id" element={<SingleProduct />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/register" element={user ? <Navigate replace to="/"/>:<Register />}></Route>
      <Route path="/login" element={user ? <Navigate replace to="/"/> :<Login />}></Route>
    </Routes>
  );

}

export default App;
