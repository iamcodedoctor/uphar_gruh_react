import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { laodUser } from "./redux/actions/userActions";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
import PaymentFailure from "./pages/paymentFailure";

function App() {
    const dispatch = useDispatch();
    const { error, message, isAuthenticated, user } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        dispatch(laodUser());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({
                type: "clearError",
            });
        }
        if (message) {
            toast.success(message);
            dispatch({
                type: "clearMessage",
            });
        }
    }, [dispatch, error, message]);
    return (
        <Router>
            <Header isAuthenticated={isAuthenticated} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/paymentSuccess" element={<PaymentSuccess />} />
                <Route path="/paymentFailure" element={<PaymentFailure />} />

                <Route path="/about" element={<About />} />

                {/*User Protected Routes*/}
                <Route
                    path={"/login"}
                    element={
                        <ProtectedRoute
                            isAuthenticated={!isAuthenticated}
                            redirect={"/profile"}
                        >
                            <Login />
                        </ProtectedRoute>
                    }
                />

                <Route
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect={"/login"}
                        />
                    }
                >
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/myOrders" element={<MyOrders />} />
                    <Route
                        path="/orderDetails/:id"
                        element={<OrderDetails />}
                    />
                    <Route path="/paymentMethod" element={<ConfirmOrder />} />
                </Route>

                {/*Admin Protected Routes*/}
                <Route
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            adminRoute={true}
                            isAdmin={user && user.role === "admin"}
                            redirect={"/profile"}
                        />
                    }
                >
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/orders" element={<Orders />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <Toaster />
        </Router>
    );
}

export default App;
