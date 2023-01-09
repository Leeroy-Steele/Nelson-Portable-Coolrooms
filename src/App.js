import {  Route, Routes } from "react-router-dom" //npm install react-router-dom
import React from 'react' // needed here for lazy loading
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Components/LoginPages/Auth'

import HeaderNavbar from './Components/HeaderNavbar';
import Footer from './Components/Footer'
import PageNotFound from "./Components/PageNotFound";

const HomePage = React.lazy(()=>import('./Components/HomePage/HomePage'))
const ProductsPage = React.lazy(()=>import('./Components/ProductsPage/ProductsPage'))
const ContactPage = React.lazy(()=>import("./Components/ContactPage/ContactPage"));
const LoginPage = React.lazy(()=>import("./Components/LoginPages/LoginPage"));
const LogoutPage = React.lazy(()=>import("./Components/LoginPages/LogoutPage"));

function App() {
  return (
    <div className="App">

      <AuthProvider>

      <HeaderNavbar/>

        <Routes>
          <Route
            path='/'
            element={
              <React.Suspense fallback={<Loading />}>
                <HomePage />
              </React.Suspense>
            }/>

          <Route
            path='/Products'
            element={
              <React.Suspense fallback={<Loading />}>
                <ProductsPage />
              </React.Suspense>
            }/>
          
            <Route 
              path="/Contact" 
              element= {
                <React.Suspense fallback={<Loading />}>
                  <ContactPage />
                </React.Suspense>
            }/>
     
            <Route 
              path="/Login" 
              element= {
                <React.Suspense fallback={<Loading />}>
                  <LoginPage />
                </React.Suspense>
            }/>
                 
            <Route 
              path="/Logout" 
              element= {
                <React.Suspense fallback={<Loading />}>
                  <LogoutPage />
                </React.Suspense>
            }/>
            
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
        </AuthProvider>
     

    </div>
  );
}


function Loading() {
  return <div className="loader"></div>;
}

export default App;
