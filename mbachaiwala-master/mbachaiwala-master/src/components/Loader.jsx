import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import "../styles/loader.scss";

const Loader = (props) => {

  return (
    <>
    <div className="loader">
      <div style={{display:"flex",flexDirection:"column"}}>
      <img src={logo} alt="Loading..." />
      <Link to="./">
      <button  onClick={()=>props.delete()} style={{marginLeft:"0.7rem",marginTop:"2rem",borderRadius:"1rem",border:"none",padding:"1rem",backgroundColor:" #6d3d0f",color:"white",cursor:"pointer"}} >
         click to continue
    </button>
    </Link>
    </div>
    </div>
    
    </>
  );
};

export default Loader;
