import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import '../../styles/imageview.css'
function ImageView({ path }) {
  // console.log(path);
    return (
     <>
      
      <div className="img-view">
      {/* <span className="close">x</span> */}
        <img className="img" alt='property-img' src={path}  />
      </div>
      
     </>
    );
  }
  
  export default ImageView;