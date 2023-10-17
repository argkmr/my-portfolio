import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useState, useEffect } from "react";


const App = () => {
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div >
        {/* <Feedbacks /> */}
        <div className="">
          <StarsCanvas/>
          <Hero />
          <About />

          <Experience />

          <Tech />

          <Works />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
