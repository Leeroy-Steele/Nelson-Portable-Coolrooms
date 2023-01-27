import {  Route, Routes } from "react-router-dom" //npm install react-router-dom
import React from 'react' // needed here for lazy loading
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderNavbar from './Components/HeaderNavbar';
import Footer from './Components/Footer'
import PageNotFound from "./Components/PageNotFound";

const HomePage = React.lazy(()=>import('./Components/HomePage/HomePage'))
const ProductsPage = React.lazy(()=>import('./Components/ProductsPage/ProductsPage'))
const ContactPage = React.lazy(()=>import("./Components/ContactPage/ContactPage"));

function App() {
  return (
    <div className="App">

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
            
            <Route path="*" element={<PageNotFound />} />

        </Routes>

        <Footer/>
     
    </div>
  );
}

function Loading() {
  return <div className="loader"></div>;
}

export default App;
