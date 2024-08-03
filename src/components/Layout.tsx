import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}: any){
  return(
    <main >
      <Header />
        <div  className="bg-gray-800 min-h-[89vh]">
          {children}
        </div>
      <Footer />
    </main>
  )
}