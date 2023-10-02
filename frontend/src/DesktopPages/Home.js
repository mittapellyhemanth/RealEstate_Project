import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import axios from 'axios';
import PropertyList from '../componants/propertyListing/PropertyList';
import PropertySearch from '../componants/propertyListing/PropertySearch';
import Sidebar from '../componants/Sidebar';
import Nav from "../componants/Nav"
import { GiToken } from 'react-icons/gi';
import { PropertyContext } from '../componants/Add_property/ContextProvider';



const HomePage = () => {

const {SetIsEdit,SetBasicDetail,SetPropertyDetail,SetGeneral_info,SetLocation_info,SetAddProperty,SetPageNav} = useContext(PropertyContext);
useEffect(()=>{

  SetBasicDetail(
    {
      property_type: "",
      price: "",
      negotiable: "",
      ownerShip: "",
      property_age: "",
      property_approved: "",
      property_description: "",
      bank_loan: ""
    }
  );
                SetGeneral_info({
                  owner_name: "",
                  mobile: "",
                  postedby: "",
                  saletype: "",
                  featured: "",
                  ppdpackage: ""
                });
                SetLocation_info({
                  email: "",
        city: "",
        addressarea: "",
        pincode: "",
        address: "",
        landmark: "",
        longitude: "",
        latitude: ""
                });
                SetPropertyDetail({
                  length: "",
                  breath: "",
                  area: "",
                  area_unit: "",
                  bhk: "",
                  floor: "",
                  attached: "",
                  western: "",
                  furnished: "",
                  parking: "",
                  lift: "",
                  electricity: "",
                  facing: ""
                });
                // SetAddProperty({

                // });
                SetPageNav("Basic")
},[])
  function clearData() {
    setSearchFlag(false);
    setValues({
      property: "",
      length: 0,
      breadth: 0,
      area: 0,
      imageUrl: "",
      _id: "",
      mobile: "",
      negotiable: "",
      price: "",
      ownership: "",
      propertyAge: "",
      propApproved: "",
      propDescription: "",
      bankLoan: "",
      areaUnit: "",
      bhk: "",
      floorNum: "",
      attached: "",
      westToilet: "",
      furnished: "",
      parking: "",
      lift: "",
      electricity: "",
      facing: "",
      name: "",
      postedBy: "",
      saleType: "",
      package: "",
      ppdPackage: "",
      email: "",
      city: "",
      addArea: "",
      pincode: "",
      address: "",
      landmark: "",
      latitude: "",
      longitude: "",

    });
    
  }
  // let token = localStorage.getItem("token");
  // let id = localStorage.getItem("userID");
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);
  const [values, setValues] = useState([]);
  const [change, setChange] = useState(true);
  useEffect(() => {
    // console.log(values.data);
  }, [values]);

  function searchingById() {
    let token = localStorage.getItem("token");
    const headers = {
      Authorization: token
    };
    // console.log(token, id);
    setSearchFlag(true);
    let url = `${process.env.REACT_APP_BASE_URL}/prop/v1/getproperty/${searchId}`;
    axios
      .get(url,{headers})
      .then((res) => {
        console.log(res.data);
        setValues([res.data.data]);
        setSearchId("");
      })
      .catch((e) => {
        setSearchId("");
        console.log(e);
      });
  }

  function update(details) {
    console.log(details._id);
    let data = { status: "Sold" };
    let token = localStorage.getItem("token");
    axios
        .patch(
            `${process.env.REACT_APP_BASE_URL}/prop/v1/sold/${details._id}`,
            data,
            {
                headers: {
                    'Authorization' : token
                },
            }
        )
        .then((res) => {
            console.log(res.data);
            setChange(false);
            setValues([res.data.data])
        })
        .catch((error) => alert("Unable to sell"));
}
  return (
    <div className='container-fluid'>
      <div className='row flex-nowrap' >
        <Sidebar/>
        <div className='col container' style={{ maxWidth: "80%" }}>
          <Nav/>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "40px",
              width: "100%",
            }}
          >
            <div
              style={{
                maxWidth:"200px",
                maxHeight:"100px"
              }}
            >
              <div className='input-group mb-3'>
                <input
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    height:"50px"
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Search by Id"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div
                  className='input-group-append'
                  onClick={() => searchingById()}
                >
                  <span
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      cursor: "pointer",
                      borderTopRightRadius: "25px",
                      borderBottomRightRadius: "25px",
                      height:"50px",
                      width:"50px"
                    }}
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    <AiOutlineSearch />
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                navigate("/addproperty/basic_detail")
                SetIsEdit(false)
              }}
              className="btn btn-info"
              style={{
                fontSize: "20px",
                fontWeight : "200px",
                display: "flex",
                backgroundColor:"#6AB4F8",
                color: "whitesmoke",
                alignItems: "center",
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.13)",
                justifyContent: "center",
                borderRadius: "35px",
                border:"none"
              }}
            >

              <span className="ms-1 d-none d-sm-inline">+ Add Property</span>
            </button>
          </div>
          {searchFlag ? (
            <>
              <div
                className='row'
                style={{
                  display: "flex",
                  marginTop: "15px",
                  justifyContent: "flex-end",
                  paddingRight: "35px",
                  
                }}
              >
                <button
                  type='button'
                  onClick={()=>clearData()}
                  className="btn btn-info"
                  style={{
                    fontSize: "larger",
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    justifyContent: "center",
                    borderRadius: "35px",
                    backgroundColor:"#6AB4F8",
                    border:"none",
                  }}
                >
                  <MdOutlineClear />
                  <span className="ms-1 d-none d-sm-inline">Clear</span>
                </button>
              </div>
              <PropertySearch values={values} update={update} change={change} />
            </>
          ) : (
            <>
              <PropertyList values={values} update={update} change={change} />
            </>
          )}
          </div>
      </div>
    </div>
  );
}

export default HomePage;