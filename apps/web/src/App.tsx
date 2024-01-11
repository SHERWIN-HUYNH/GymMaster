import Navbar from "@/scenes/navbar/";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/home/";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourclasses/";
import ContactUs from "./scenes/contactus/ContactUs";
import Footer from "@/scenes/footer";
import productApi from "./api/productApi";
import axiosClient from "./api/axiosClient";
import axios from "axios";
import signIn from "./api/signIn";
function App() {
  const [data, setData] = useState(null);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  ); // you wanna explicit the type of useState
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
        setSelectedPage(SelectedPage.Home);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CALL API
  const signIn = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/sign-in`);
    const json = await res.json();
    return json.data;
  };
  useEffect(() => {
    signIn();
    console.log("SUCCEESS");
  }, []);

  return (
    <div className="app bg-gray-20">
      {/* COMPONENTS HERE */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
