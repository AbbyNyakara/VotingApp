import React, {Fragment} from "react";
import logo from "../../assets/images/msu-logo.png";
import './home.scss';

const Home = () => {
  return(
      <div className="home">
        <img src={logo} alt="" />
        <h1>2023 Student Elections</h1>
        <button>Get Started</button>
      </div>
  )
};

export default Home;