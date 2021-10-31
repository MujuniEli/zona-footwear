import './App.css';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import CartContextProvider from './context/CartContext'
import Landing from './pages/Landing'
import Navbar from './components/Navbar';
import Store from './pages/Store'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Product from './pages/Product';
import Admin from "./pages/Admin";
function App() {
  const routes = [
    { path: "/", element: <Landing /> },
    { path: "/store", element: <Store /> },
    { path: "/cart", element: <Cart /> },
    { path: "/admin", element: <Admin /> },
    { path: "/product/:productID", element: <Product /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
  ]; 
  const Routing = () => {
    return (useRoutes(routes))
  } 

  return (
    <div className="App">
      <Router>
        <CartContextProvider>
          <Navbar />
          <Routing/>
          </CartContextProvider>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
