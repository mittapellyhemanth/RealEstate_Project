import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdUpload } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import logo from "../images/realstate.png"
const SideBar = () => {
    return (

        <div
            className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 "
            style={{
                justifyContent: "center",
                backgroundColor: "#e1f9f4",
                width:"18%"
            }}
        >
            <div
                className="d-flex flex-column align-items-center min-vh-100"
                style={{
                    color: "#AAAAAA",
                    paddingTop: "25px",
                }}
            >
                <div
                    style={{
                        height: "100vh",
                        // width:"600px",
                           backgroundColor: "#e1f9f4",
                        padding: "0 10px",
                    }}
                >
                    <img
                        className="logo"
                        alt="logo"
                        style={{
                            maxHeight: "60px",
                            maxWidth: "60px",
                            margin: "20px",
                            marginBottom:"50px"
                        }}
                        src={logo}
                    />
                    <div>
                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            <li className="nav-item">
                                <a
                                    href="/home"
                                    style={{ color: "#2289FF" }}
                                    className="nav-link align-middle px-0"
                                >
                                    <i className="fs-4 bi-house">
                                        {" "}
                                        <AiFillHome />
                                    </i>
                                    <span className="ms-1 d-none d-sm-inline mx-2" >Property</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/home" style={{color:"#AAAAAA"}} className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house">
                                        <MdNotifications />
                                    </i>{" "}
                                    <span className="ms-1 d-none d-sm-inline mx-2">
                                        Assistance
                                    </span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="/home" style={{color:"#AAAAAA"}} className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house">
                                        <GiReceiveMoney />
                                    </i>{"  "}
                                    <span className="ms-1 d-none d-sm-inline mx-2">
                                        {" "}
                                        Received Interest
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/home" style={{color:"#AAAAAA"}} className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house">
                                        <MdUpload />
                                    </i>{" "}
                                    <span className="ms-1 d-none d-sm-inline mx-2">
                                        {" "}
                                        Sent Interest
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/home" style={{color:"#AAAAAA"}} className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house">
                                        <AiFillEye />
                                    </i>{" "}
                                    <span className="ms-1 d-none d-sm-inline mx-2">
                                        {" "}
                                        Property Views
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/home" style={{color:"#AAAAAA"}} className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house">
                                        <BsFillTagFill />
                                    </i>{" "}
                                    <span className="ms-1 d-none d-sm-inline mx-2"> Tariff Plan</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default SideBar