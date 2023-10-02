
import { useContext, useState } from "react";
import Button from "./Button";
import { PropertyContext } from "./ContextProvider";
import PageIndicator from "./PageIndicator";
import { OnClickGeneral_info } from "./OnClickLogic";
import Sidebar from "../Sidebar";
import Nav from "../Nav"
import { IoCameraSharp } from "react-icons/io5";



export default function General_info() {

    const [file, SetFile] = useState(null);
    const { General_info, SetGeneral_info, SetAddProperty, BasicDetail, PropertyDetail } = useContext(PropertyContext);

    if (file != undefined || file != null) {
        console.log(file.name)
    }
    const mergeProperty = () => {
        SetAddProperty({
            propertyimage: file,
            ...BasicDetail,
            ...PropertyDetail,
            ...General_info
        })
    }
    return <div className="router">
        <div className="Sidebar"> <Sidebar />

        </div>
        <div className="second_wrapper">
            <div className="Nav"><Nav /></div>
            <div>

                <PageIndicator />
                <form className="outer_form" >
                    <div className="form">

                        <div className="form_first" >
                            <label htmlFor="owner_name">Name</label>
                            <br />
                            <input type="text" id="owner_name" placeholder="Owner Name" onChange={(e) => {
                                OnClickGeneral_info(e, "owner_name", General_info, SetGeneral_info)
                            }}
                                required
                                value={General_info.owner_name}
                            />
                            <br />
                            <label htmlFor="postedby">Posted By</label>
                            <br />
                            <select id="postedby" onChange={(e) => {
                                OnClickGeneral_info(e, "postedby", General_info, SetGeneral_info)
                            }}
                                value={General_info.postedby}  >
                                <option value="" disabled >Posted By</option>
                                <option>Owner</option>
                                <option>Sales Agent</option>
                                <option>Dealer</option>
                            </select>
                            <br />
                            <label htmlFor="featured">Featured Package</label>
                            <br />
                            <select id="featured" onChange={(e) => {
                                OnClickGeneral_info(e, "featured", General_info, SetGeneral_info)
                            }}
                                value={General_info.featured} >
                                <option value="" disabled >Please Select</option>
                                <option>Available</option>
                                <option>Not Available</option>

                            </select>
                            <br />


                            <input type="file" name="propertyimage" id="propertyimage" style={{ display: "none" }} onChange={(e) => {
                                SetFile(e.target.files[0]);
                            }} />
                            <label htmlFor="propertyimage" >
                                <div>
                                    <span id="bottom_icon" >
                                        <span id="top_icon" >
                                            <IoCameraSharp size={50} />
                                        </span>
                                    </span>
                                    <span>Add Photo</span>
                                </div>
                                {file != undefined || file != null ? <p>{file.name}</p> : <></>}

                            </label>
                            <br />
                        </div>
                        <div className="form_second" >
                            <label htmlFor="mobile">Mobile</label>
                            <br />
                            <input type="number" id="mobile"
                                placeholder="Enter Mobile Number"
                                onChange={(e) => {
                                    OnClickGeneral_info(e, "mobile", General_info, SetGeneral_info)
                                }}
                                required minLength={10} maxLength={10}
                                value={General_info.mobile} />
                            <br />
                            <label htmlFor="saletype">Sale Type</label>
                            <br />
                            <select id="saletype" onChange={(e) => {
                                OnClickGeneral_info(e, "saletype", General_info, SetGeneral_info)
                            }}
                                value={General_info.saletype} >
                                <option value="" disabled >Please Select</option>
                                <option>Offer</option>
                                <option>General</option>
                            </select>
                            <br />
                            <label htmlFor="ppdpackage">PPD Package</label>
                            <br />
                            <select id="ppdpackage" onChange={(e) => {
                                OnClickGeneral_info(e, "ppdpackage", General_info, SetGeneral_info)
                            }}
                                value={General_info.ppdpackage}  >
                                <option value="" disabled>Please Select</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>
                        </div>
                    </div>
                    <Button
                        backWardPath={"/addproperty/property_detail"}
                        forWardPath={"/addproperty/location_info"}
                        children1={"Previous"}
                        children2={"Save & Next"}
                        forward_action={mergeProperty}
                        nextpage={"Location"}
                        prevPage={"Add"} />
                </form>
            </div>
        </div>
    </div>
}