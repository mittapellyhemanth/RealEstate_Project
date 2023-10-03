import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import "../styles/addproperty.css"
function PropertyView() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");


  const location = useLocation();
  const table = location.state;
  // console.log(tableDetails);
  const [heading, setHeading] = useState("Basic Info");
  const active = "#6AB4F8";
  const normal = "";
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();
  useEffect(() => { }, [page]);


  let id = localStorage.getItem(("userID"));
  
  const [pathFlag, setPathFlag] = useState(false);
  const [path, setPath] = useState("");
  const [data, setData] = useState([]);
  const [change, setChange] = useState(true);

  function showImage(data) {
      setPath(`${process.env.REACT_APP_BASE_URL}/${data.image}`);
      setPathFlag(true);
      // console.log(path);
      console.log(data.image);
  }

  let url = `${process.env.REACT_APP_BASE_URL}/prop/v1/getproperty/${table.ppdid}`;
  useEffect(() => {
      // let token = localStorage.getItem("token");
     
      // console.log(token);
      fetch(url, {
          method: "GET",
          headers: {
              'Authorization': token,
              'Content-Type': 'multipart/form-data'
          },
      })
          .then((res) => {
              // console.log(res)
              if (res.statusText === "Forbidden") {
                  alert("Session over");
                  navigate('/');
              } else {
                  res.json().then((result) => {
                      console.log(result.data);
                      
                      setData([result.data]);
                  });
              }
          })
          .catch((err) => navigate("/"));
  }, [ token, url, change, navigate]);


  return (
    <div className="container" style={{ padding: "25px" }}>
      <div style={{ display: "flex" }}>
        <button
          type="button"
          onClick={() => navigate(-1)}
         
          style={{
            fontSize: "larger",
            backgroundColor:"grey",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            justifyContent: "center",
            borderRadius: "35px",
          }}
        >
          <RiArrowGoBackLine />

          <span className="ms-1 d-none d-sm-inline">Back</span>
        </button>
      </div>
      <h1>Property and Owner Details</h1>
      <table
        style={{ marginTop: "15px" }}
        id="example"
        className="table   container table-info"
      >
        <thead>
          <tr>
            <th colSpan="2">
              <h3>{heading}</h3>
            </th>
          </tr>
        </thead>
       {
        data.map((tableDetails)=>(
          <tbody>
          {(() => {
            switch (page) {
              case 1:
                return (
                  <>
                    <tr>
                      <td>Property ID</td>
                      <td>{tableDetails.ppdid}</td>
                    </tr>
                    <tr>
                      <td>Property Type</td>
                      <td>{tableDetails.property_type}</td>
                    </tr>
                    <tr>
                      <td>Negotiable</td>
                      <td>{tableDetails.negotiable}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{tableDetails.price}</td>
                    </tr>
                    <tr>
                      <td>Ownership</td>
                      <td>{tableDetails.ownerShip}</td>
                    </tr>
                    <tr>
                      <td>Property Age</td>
                      <td>{tableDetails.property_age}</td>
                    </tr>
                    <tr>
                      <td>Property Approved</td>
                      <td>{tableDetails.property_approved}</td>
                    </tr>
                    <tr>
                      <td>Property Description</td>
                      <td>{tableDetails.property_description}</td>
                    </tr>
                    <tr>
                      <td>Bank Loan</td>
                      <td>{tableDetails.bank_loan}</td>
                    </tr>
                  </>
                );
              case 2:
                return (
                  <>
                    <tr>
                      <td>Length</td>
                      <td>{tableDetails.length}</td>
                    </tr>
                    <tr>
                      <td>Breath</td>
                      <td>{tableDetails.breath}</td>
                    </tr>
                    <tr>
                      <td>Total Area</td>
                      <td>{tableDetails.area}</td>
                    </tr>
                    <tr>
                      <td>Area Unit </td>
                      <td>{tableDetails.area_unit}</td>
                    </tr>
                    <tr>
                      <td>No of BHK</td>
                      <td>{tableDetails.bhk}</td>
                    </tr>
                    <tr>
                      <td>No of Floor</td>
                      <td>{tableDetails.floor}</td>
                    </tr>
                    <tr>
                      <td>Attached</td>
                      <td>{tableDetails.attached}</td>
                    </tr>
                    <tr>
                      <td>Western Toilet</td>
                      <td>{tableDetails.western}</td>
                    </tr>
                    <tr>
                      <td>Furnished</td>
                      <td>{tableDetails.furnished}</td>
                    </tr>
                    <tr>
                      <td>Car Parking</td>
                      <td>{tableDetails.parking}</td>
                    </tr>
                    <tr>
                      <td>Lift</td>
                      <td>{tableDetails.lift}</td>
                    </tr>
                    <tr>
                      <td>Electricity</td>
                      <td>{tableDetails.electricity}</td>
                    </tr>
                  </>
                );
              case 3:
                return (
                  <>
                    <tr>
                      <td>Name</td>
                      <td>{tableDetails.owner_name}</td>
                    </tr>
                    <tr>
                      <td>Mobile</td>
                      <td>{tableDetails.mobile}</td>
                    </tr>
                    <tr>
                      <td>Posted by</td>
                      <td>{tableDetails.postedby}</td>
                    </tr>
                    <tr>
                      <td>Sale Type</td>
                      <td>{tableDetails.saletype}</td>
                    </tr>
                    <tr>
                      <td>Featured Package</td>
                      <td>{tableDetails.featured}</td>
                    </tr>
                    <tr>
                      <td>PPD Package</td>
                      <td>{tableDetails.ppdpackage}</td>
                    </tr>
                  </>
                );
              case 4:
                return (
                  <>
                    <tr>
                      <td>Email</td>
                      <td>{tableDetails.email}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{tableDetails.city}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>{tableDetails.area}</td>
                    </tr>
                    <tr>
                      <td>Pincode</td>
                      <td>{tableDetails.pincode}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{tableDetails.address}</td>
                    </tr>
                    <tr>
                      <td>Landmark</td>
                      <td>{tableDetails.landmark}</td>
                    </tr>
                    <tr>
                      <td>Latitude</td>
                      <td>{tableDetails.latitude}</td>
                    </tr>
                    <tr>
                      <td>Longitude</td>
                      <td>{tableDetails.longitude}</td>
                    </tr>
                  </>
                );
              default:
                <></>;
            }
          })()}
        </tbody>
        ))
       }
      </table>
      <div className="buttons"
      style={{
        display:"flex",
        justifyContent:"space-between"
        
        }}>
      <div className="basic">
        <button style={{
          backgroundColor: page === 1 ? active : normal,
            borderRadius: "35px",
        }}
        onClick={() => setPage(1)}>Basic  Info</button>
      </div>
      <div className="basic">
        <button 
        onClick={() => setPage(2)}
        style={{
          backgroundColor: page === 2 ? active : normal,
            borderRadius: "35px",
        }}>Properties Info</button>
      </div>
      <div className="basic">
        <button 
        onClick={() => setPage(3)}
        style={{
          backgroundColor: page === 3 ? active : normal,
            borderRadius: "35px",
        }}>General Info</button>
      </div>
      <div className="basic">
        <button 
        onClick={() => setPage(4)}
        style={{
          backgroundColor: page === 4 ? active : normal,
            borderRadius: "35px",
        }}>Location Info</button>
      </div>
      </div>
    </div>
  );
}

export default PropertyView;