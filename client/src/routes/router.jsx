import React from "react";
import { About } from "./About";
import { Home } from "./Home";
import { Sigup } from "./Sigup";
import { Login } from "./login";
import { Contact } from "./contact";
import NoMatch from "./NoMatch";
import { Routes, Route, Link } from "react-router-dom";
import { Logout } from "./logout";
import { Product } from "./product";
import { AddProduct } from "./AddProduct";
import { AdminRoutes } from "./adminRoutes";
import { UpDateComponet } from "./upadateComponets";
import { Booking } from "./Booking";
import { BookingDetail } from "./bookingDetail";
import { Successfully } from "./successfully";

export function Router(props) {
  return (
    <>
      <Routes>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <Sigup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/sigup" element={<Sigup/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="/product" element={<Product/>}/>
        <Route exact path="/product/new" element={<AddProduct/>}/>
        <Route exact path="/adminroute" element={<AdminRoutes/>}/>
        <Route exact path="/adminroute" element={<AdminRoutes/>}/>
        <Route exact path="/product/:id" element={<UpDateComponet/>}/>
        <Route exact path="/booking" element={<Booking/>}/>
        <Route exact path="/bookingdetails" element={<BookingDetail/>}/>
        <Route exact path="/successfully" element={<Successfully/>}/>
        <Route exact path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  );
}
