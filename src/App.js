import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import "./styles/App.css";
import Footer from "./components/Layout/Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import ConfirmOrder from "./pages/ConfirmOrder";
import PaymentSuccess from "./pages/PaymentSuccess";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/shipping" element={<Shipping/>}/>
                <Route path="/confirmOrder" element={<ConfirmOrder/>}/>
                <Route path="/paymentSuccess" element={<PaymentSuccess/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/myOrders" element={<MyOrders/>}/>
                <Route path="/orderDetails/:id" element={<OrderDetails/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path='/admin/dashboard' element={<Dashboard/>}/>
                <Route path='/admin/users' element={<Users/>}/>
                <Route path='/admin/orders' element={<Orders/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
