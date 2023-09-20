import React from "react";
import Images from "../components/Images";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SeacrhBar from "../components/SeacrhBar";

const Home = () => {
  return (
    <div className="lg:container mx-auto ">
      <Header />
      <SeacrhBar />
      <Images />
      <Footer />
    </div>
  );
};

export default Home;
