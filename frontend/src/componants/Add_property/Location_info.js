
// This is location information page of Add property

import { useContext, useState } from "react";
import Button from "./Button"
import { PropertyContext } from "./ContextProvider";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PageIndicator from "./PageIndicator";
import { OnClickLocation_info } from "./OnClickLogic";
import Sidebar from "../Sidebar";
import Nav from "../Nav";
import Loader from "./Loader";




export default function Location() {


    const { Location_info, SetLocation_info, AddProperty, SetAddProperty, SetBasicDetail, SetPropertyDetail, SetGeneral_info } = useContext(PropertyContext);
    const navigate = useNavigate();
    console.log(AddProperty);

    const [loader, Setloader] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        console.log(token)
        const data = AddProperty
        Setloader(true);
        try {
// console.log(process.env.REACT_APP_BASE_URL}/prop/addproperty)
            let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/prop/addproperty`, data, {
                headers: {
                    "Authorization": token,
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.status == 200) {

                // SetBasicDetail("");
                // SetGeneral_info("");
                // SetLocation_info("");
                // SetAddProperty("");
                alert("Data Saved sucessFully");
                navigate('/home')
            //    window.location.reload();

            } else {
                Setloader(false)
                alert("unable to save data make sure all required data filled");
                console.log(res.status);
            }
        }
        catch (error) {
            console.log(data)
            Setloader(false);
            alert("Err in saving data All field must be filled");
            console.log(error);
            
        }
        finally {
            Setloader(false);
        }

    }

    return <div className="router">
        {loader ? <Loader /> : <div>
            <div className="Sidebar">
                <Sidebar />

            </div>
            <div className="second_wrapper">
                <div className="Nav"><Nav /></div>
                <div>
                    <PageIndicator />

                    <form className="outer_form" onSubmit={(event) => {
                       // event.preventDefault();
                        handleSubmit(event);

                    }} >
                        <div className="form">

                            <div className="form_first">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" id="email" placeholder="Email"
                                    onChange={(e) => {
                                        OnClickLocation_info(e, "email", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                    }}
                                    required
                                    value={Location_info.email} />
                                <br />
                                <label htmlFor="addressarea">Area</label>
                                <br />
                                <select id="addressarea" onChange={(e) => {
                                    OnClickLocation_info(e, "addressarea", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                }}
                                    value={Location_info.addressarea}  >
                                    <option value="" disabled >Select Area</option>
                                    <option>Urban</option>
                                    <option>rural</option>
                                </select>
                                <br />
                                <label htmlFor="address">Address</label>
                                <br />
                                <input type="text" id="address" placeholder="Address"
                                    onChange={(e) => {
                                        OnClickLocation_info(e, "address", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                    }}
                                    required
                                    value={Location_info.address} />
                                <br />
                                <label htmlFor="latitude">Latitude</label>
                                <br />
                                <input type="text" id="latitude" placeholder="Latitude" onChange={(e) => {
                                    OnClickLocation_info(e, "latitude", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                }}
                                    value={Location_info.latitude} />
                                <br />
                            </div>
                            <div className="form_second">
                                <label htmlFor="city">City</label>
                                <br />
                                <select id="city" onChange={(e) => {
                                    OnClickLocation_info(e, "city", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                }} required
                                    value={Location_info.city} >
                                    <option value="" disabled>Select City</option>
                                    <option>Bangaluru</option>
                                    <option>Vizag</option>
                                    <option>Hyderabad</option>
                                </select>
                                <br />

                                <label htmlFor="pincode">Pincode</label>
                                <br />
                                <select id="pincode" onChange={(e) => {
                                    OnClickLocation_info(e, "pincode", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                }} required
                                    value={Location_info.pincode} >
                                    <option value="" disabled >Select Pincode</option>
                                    <option>50002</option>
                                    <option>76520</option>
                                    <option>50505</option>
                                </select>
                                <br />
                                <label htmlFor="landmark">Landmark</label>
                                <br />
                                <input type="text" id="landmark"
                                    placeholder="Landmark" onChange={(e) => {
                                        OnClickLocation_info(e, "landmark", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                    }}
                                    value={Location_info.landmark} />
                                <br />
                                <label htmlFor="longitude">Longitude</label>
                                <br />
                                <input type="text" id="longitude" placeholder="Longitude" onChange={(e) => {
                                    OnClickLocation_info(e, "longitude", Location_info, SetLocation_info, AddProperty, SetAddProperty)
                                }}
                                    value={Location_info.longitude} />
                                <br />
                            </div>
                        </div>
                        <Button
                            backWardPath={"/addproperty/general_info"}
                            forWardPath={"/addproperty"}
                            children1={"Previous"}
                            children2={"Add Property"}
                            nextpage={"Basic"}
                            prevPage={"General"}
                        />

                    </form>
                </div>
            </div>
        </div>}
    </div>
} 