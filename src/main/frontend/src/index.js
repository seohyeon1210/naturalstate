import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CheckoutPage} from './components/Payment/Checkout';
import {SuccessPage} from './components/Payment/Success';
import {FailPage} from './components/Payment/Fail';
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import Login from "./components/Login/Login";
import StoreJoin from "./components/Join/StoreJoin";
import FindUser from "./components/Login/FindUser";
import CustomerService from "./components/CustomerService/CustomerService";
import PostForm from "./components/CustomerService/PostForm";
import Terms from "./components/Terms/Terms";
import Report from "./components/Report/Report";
import Notice from "./components/CustomerService/Notice";
import Inquiry from "./components/CustomerService/Inquiry";
import WebTerms from "./components/Terms/WebTerms";
import ProductWrite from "./components/Product/ProductWrite";
import ProductDetail from "./components/Product/ProductDetail";
import ProductPage from "./components/Product/ProductPage";
import BestProduct from "./components/Product/BestProduct";
import AllProduct from "./components/Product/AllProduct";
import {Cart} from "react-bootstrap-icons";
import Mypage from "./components/Mypage/Mypage";
import OrderList from "./components/Mypage/OrderList";
import AdminPage from "./components/Adminpage/Adminpage";
import AdminOrder from "./components/Adminpage/AdminOrder";
import AdminUserlist from "./components/Adminpage/AdminUserlist";
import AdminConfirmlist from "./components/Adminpage/AdminConfirmlist";
import RegisteredProduct from './components/Mypage/RegisteredProduct';
import DeliveryMethod from './components/CustomerService/DeliveryMethod';
import EventPage from './components/CustomerService/Event';
import PartnerTerms from './components/Terms/PartnerTerms';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Main /> },
            { path: "join", element: <Join /> },
            { path: "login", element: <Login /> },
            { path: "storejoin", element: <StoreJoin /> },
            { path: "finduser", element: <FindUser /> },
            { path: "customerservice", element: <CustomerService /> },
            { path: "post", element: <PostForm /> },
            { path: "terms", element: <Terms /> },
            { path: "report", element: <Report /> },
            { path: "events", element: <EventPage /> },
            { path: "inquiry", element: <Inquiry /> },
            { path: "webterms", element: <WebTerms /> },
            { path: "productwrite", element: <ProductWrite /> },
            { path: "/product/:productId", element: <ProductDetail /> },
            { path: "productpage", element: <ProductPage /> },
            { path: "bestproduct", element: <BestProduct /> },
            { path: "allproduct", element: <AllProduct /> },
            { path: "/products/:category", element: <ProductPage /> },
            { path: "cart", element: <Cart /> },
            { path: "/mypage/*", element: <Mypage /> },
            { path: "orderlist", element: <OrderList /> },
            { path: "adminpage", element: <AdminPage/>},
            { path: "adminorder", element: <AdminOrder/>},
            { path: "adminuserlist", element: <AdminUserlist/>},
            { path: "adminconfirmlist", element: <AdminConfirmlist/>},
            { path: "registeredproduct", element: <RegisteredProduct/>},
            { path: "deliverymethod", element: <DeliveryMethod/> },
            { path: "notice", element: <Notice/>},
            { path: "partnerterms", element: <PartnerTerms/>},
                { path: "sandbox",
                children: [
                    { path: "", element: <CheckoutPage /> },
                    { path: "success", element: <SuccessPage /> },
                    { path: "fail", element: <FailPage /> },
                ],
            },
        ],
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);