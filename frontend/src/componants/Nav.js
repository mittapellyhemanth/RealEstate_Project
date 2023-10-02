import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import "../styles/nav.css"

const Nav = () => {
  const name = localStorage.getItem("name").toUpperCase();
  const userId = localStorage.getItem("userId");
  return (
    <>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', fontWeight: "400px",
       fontSize: "20px", color: "#bcbcbc", padding: "", marginTop: "0px" , fontFamily: "Source Sans Pro"}}>
        <a href='/home'
          className='align-middle'>
          <p style={{ color: "#bcbcbc", height : "5px"}}
            className='mb-sm-auto mb-0 details '
            id='menu'>
            USER ID: {userId}
          </p>
          </a>
        <div className='nav-item'>
          <span
            className="nav-link align-middle px-0"
            style={{ display: "flex", marginRight: "8%", }}
          >
            <i className='fs-4 bi-house' >
              <div className='dropdown'>
                
                <div class="dropdown">
  <button 
  class="btn btn-secondary dropdown-toggle" 
  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
  style={{color: "gray", fontSize: "15px", fontFamily: "Source Sans Pro", fontWeight:0, wordWrap: "break-word", width:"90px", backgroundColor:"white", border:"none",
  wordSpacing:"10px", borderRadius:"25px" }}>
  <FaUserAlt /> {name}
  </button>
  <ul 
  class="dropdown-menu"
   aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" onClick={() => localStorage.clear()} href="/" style={{fontWeight:"500px",backgroundColor:"grey",color:"wheat"}}>Logout</a></li>
  </ul>
</div>
              </div>
            </i>

          </span>
        </div>
      </div>
      <hr style= {{backgroundColor: "#E1F9F4", marginBottom: "30px" }} />
    </>
  )
}

export default Nav
