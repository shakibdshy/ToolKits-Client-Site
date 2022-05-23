import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import Blog from "./Components/Blog";
import SignIn from "./Pages/Log/SignIn";
import SignUp from "./Pages/Log/SignUp";
import NotFound from "./Pages/NotFound";
import Footer from "./Layout/Footer";

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
            <HashLoader color={"#36D7B7"} loading={isLoading} css={override} size={80} />
          )
          :
          (
            <>
              <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
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
