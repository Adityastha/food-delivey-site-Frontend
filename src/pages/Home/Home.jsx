import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import OptionsMenu from "../../components/OptionsMenu/OptionsMenu";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <OptionsMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
