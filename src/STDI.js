import Nav from "./components/Nav";
import Content from "./components/Content";
import Title from "./components/Title";
import React from "react";
import "./STDI.css";

const STDI = () => {
 

  return (
    <div className="STDI">
      <span><h1>Elearning STDI imam syafi'i</h1>
      </span>
        <Nav />
        <Title />
        <Content />
    </div>
  );
};

export default STDI;
