import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BsImageFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit, MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ImageView from './ImageView';
import {  PropertyContext } from '../Add_property/ContextProvider';
import { FaEdit } from 'react-icons/fa';


const PropertyList = () => {
    
    let token = localStorage.getItem("token");
    let id = localStorage.getItem(("userID"));
    const navigate = useNavigate();
    const [pathFlag, setPathFlag] = useState(false);
    const [path, setPath] = useState("");
    const [data, setData] = useState([]);
    const [change, setChange] = useState(true);
    const {SetnewData,SetIsEdit} = useContext(PropertyContext);


    function showImage(data) {
        setPath(`${process.env.REACT_APP_BASE_URL}/prop/images/${data}`);
        setPathFlag(true);
        
        // console.log(data.image);
    }

    let url = `${process.env.REACT_APP_BASE_URL}/prop/getproperty`;
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
                        console.log(result.data,'got');
                        
                        setData(result.data);
                    });
                }
            })
            .catch((err) => navigate("/"));
    }, [ token, url, change, navigate]);




    function update(details) {
        console.log(details._id);
        let data = { status: "Sold" };

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
                // console.log(res.data);
                setChange(!change);
            })
            .catch((error) => alert("Unable to sell"));

            
    }
    return (
        <>
            {data.length == 0 ? (
                <>
                    <h1 style={{  marginLeft:"30%" }}>No Property Found</h1>
                </>
            ) : (
                <>
                    <table
                        className='table table-hover table-responsive-xl'
                        style={{ marginTop: "35px", 
                                // fontSize: "20px",
                                // fontFamily: "Source Sans Pro",
                                // fontWeight: "400px",
                                // wordWrap:" breakWord",
                                // borderRadius : "25px" ,
                                // backGroundColor :"white",
                                // boxShadow : "rgba(0,0,0,0.13) 0px 10px 25px ",
                                // padding : "20px",
                                // top:"10px",
                                // bottom : "10px"
                        }}
                    >
                        <thead 
                        // style={{ color: "#4C57B6",
                        //         marginTop: "35px", 
                        //         // fontSize: "20px",
                        //         // fontFamily: "Source Sans Pro",
                        //         // fontWeight: "400px",
                        //         wordWrap:" breakWord",
                        //         // borderRadius : "25px" ,
                        //         // backGroundColor :"white",
                        //         // boxShadow : "rgba(0,0,0,0.13) 0px 10px 25px ",
                        // }}
                        >
                                <tr style={{ color: "#4C57B6", 
                                    fontSize: "20px",
                                    // margin :"20px",
                                    fontFamily: "Source Sans Pro",
                                    fontWeight: "400px",
                                    wordWrap:" breakWord",
                                    borderRadius : "25px" ,
                                    backGroundColor :"white",
                                    boxShadow : "rgba(0,0,0,0.13) 0px 10px 25px ",}}>
                                <th scope="col">PPD ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">Property</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Area</th>
                                <th scope="col">Views</th>
                                <th scope="col">Status</th>
                                <th scope="col">Days Left</th>
                                <th scope="col">Action</th>
                            </tr>

                            <br />


                        </thead>
                        <tbody>
                            {data.map((properties) => {
                                return (
                                    <tr key={properties.ppdid}>
                                        <th scope='row'>{properties.ppdid}</th>
                                        <th scope='col' onClick={()=>showImage(properties.image)}>
                                            <BsImageFill />
                                        </th>
                                        <th scope="col">{properties.property_type}</th>
                                        <th scope="col">{properties.mobile}</th>
                                        <th scope="col">{properties.area}</th>
                                        <th scope="col">{properties.views}</th>
                                        <th onClick={() =>update(properties)} scope='col'>
                                            <button style={{ backgroundColor: "#F5FAF5", color: "#416899", borderRadius: "5px", 
                                            border: "1px solid rgb(228 233 233)" }} className="soldbtn">{properties.status}</button>
                                        </th>
                                        <th style={{}} scope='col'>{properties.daysleft}</th>
                                        <th scope="col"
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <span
                                                onClick={() => { 
                                                    navigate("/propertyView", {state: properties});
                                                }}
                                            >
                                                <BsFillEyeFill />
                                            </span>
                                            <span
                                                onClick={() => {
                                                    // Edit Property
                                                    localStorage.setItem("ppd_id",properties.ppdid);
                                                    localStorage.setItem("PropertyData",properties.data);
                                                   
                                                    navigate("/editproperty" , { state: properties});
                                                    SetIsEdit(true);
                                                    // console.log(properties)
                                                    SetnewData(properties);
                                                    // console.log()
                                                }}
                                            >
                                                <MdModeEditOutline />
                                            </span>
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {
                        pathFlag && (
                            <div
                                style={{
                                    width: "50%",
                                    height: "40%",
                                    minHeight: "40%",
                                    position: "absolute",
                                    top: "25%",
                                    left: "25%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                onClick={() => setPathFlag(false)}
                            >

                                <ImageView path={path}/>
                            </div>
                        )}
                </>
            )}
        </>
    );
}

export default PropertyList;