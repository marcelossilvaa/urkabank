import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}: any){
  return(
    <main >
      <Header />
        <div  className="bg-[#9413dc] min-h-[89vh]">
          {children}
        </div>
      <Footer />
    </main>
  )
}