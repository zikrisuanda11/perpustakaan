import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";

export default function Member({ children }) {
  return (
    <main>
      {/* <div className="flex relative justify-end border-red-500">
        <img src="/assets/image/nav_bg.png" alt="" className="absolute h-[36rem] z-10" />
      </div> */}
      {/* top */}
      <div className="bg-[url('/public/assets/image/nav_bg.png')] bg-right bg-no-repeat">
        <Navbar />
        <Hero/>
      </div>

      {/* content */}
      {children}

      <Footer />
    </main>
  )
}