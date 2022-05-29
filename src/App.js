import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/Log/SignIn";
import SignUp from "./Pages/Log/SignUp";
import NotFound from "./Pages/NotFound";
import Footer from "./Layout/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddAReview from "./Pages/Dashboard/AddAReview";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddAProduct from "./Pages/Dashboard/AddAProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import Products from "./Pages/Products/Products";
import BlogPage from "./Pages/BlogPage";
import RequireAuth from "./Pages/Log/RequireAuth";
import ProductDetails from "./Pages/Products/ProductDetails";
import Payment from "./Pages/Dashboard/Payment";
import MyPortfolio from "./Pages/MyPortfolio";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const override = css`
  position: absolute;
  inset: 0;
  margin: auto;
`;

  return (
    <>
      {
        isLoading ?
          (
            <HashLoader color={"#7432ff"} loading={isLoading} css={override} size={80} />
          )
          :
          (
            <>
              <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/products' element={<Products />} />
                <Route path="products/:id" element={
                  <RequireAuth>
                    <ProductDetails />
                  </RequireAuth>
                } />
                <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
                  <Route index element={<MyOrder />} />
                  <Route path='all-order' element={<ManageAllOrders />} />
                  <Route path='payment/:id' element={<Payment />} />
                  <Route path='manage-products' element={<ManageProducts />} />
                  <Route path='review' element={<AddAReview />} />
                  <Route path='add-product' element={<AddAProduct />} />
                  <Route path='make-admin' element={<MakeAdmin />} />
                  <Route path='my-profile' element={<MyProfile />} />
                </Route>
                  <Route path='/portfolio' element={<MyPortfolio />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <Footer />
              <ToastContainer />
            </>
          )
      }
    </>
  );
}

export default App;
