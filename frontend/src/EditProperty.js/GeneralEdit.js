import { useState } from "react"
import { useContext } from "react"
import { PropertyContext } from "../componants/Add_property/ContextProvider";
import Nav from '../componants/Nav';
import { IoCameraSharp } from "react-icons/io5";
import PageIndicator from '../componants/Add_property/PageIndicator';
import Side from "../componants/Add_property/side";


export default function GeneralEdit({ SetPage }) {

    const { newData, SetnewData, SetPageNav,SetIsEdit } = useContext(PropertyContext)
    const [file, SetFile] = useState();


    return <div className="router">
        <div className="Sidebar"> <Side />

        </div>
        <div className="second_wrapper">
            <div className="Nav"><Nav /></div>
            <div>
                <div className="PageIndicator" >

                <PageIndicator />
                </div>
                <div className="menu">

                <form className="outer_form" >
                    <div className="form">

                        <div className="form_first">
                            <label htmlFor="owner_name">Name</label>
                            <br />
                            <input type="text" id="owner_name" placeholder="Owner Name" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    owner_name: e.target.value
                                })
                            }}
                                required
                                value={newData.owner_name}
                            />
                            <br />
                            <label htmlFor="postedby">Posted By</label>
                            <br />
                            <select id="postedby" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    postedby: e.target.value
                                })
                            }}
                                value={newData.postedby}  >
                                <option value="" disabled >Posted By</option>
                                <option>Owner</option>
                                <option>Sales Agent</option>
                                <option>Dealer</option>
                            </select>
                            <br />
                            <label htmlFor="featured">Featured Package</label>
                            <br />
                            <select id="featured" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    featured: e.target.value
                                })
                            }}
                                value={newData.featured} >
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
                                    SetnewData({
                                        ...newData,
                                        mobile: e.target.value
                                    })
                                }}
                                required minLength={10} maxLength={10}
                                value={newData.mobile} />
                            <br />
                            <label htmlFor="saletype">Sale Type</label>
                            <br />
                            <select id="saletype" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    saletype: e.target.value
                                })
                            }}
                                value={newData.saletype} >
                                <option value="" disabled >Please Select</option>
                                <option>Offer</option>
                                <option>General</option>
                            </select>
                            <br />
                            <label htmlFor="ppdpackage">PPD Package</label>
                            <br />
                            <select id="ppdpackage" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    ppdpackage: e.target.value
                                })
                            }}
                                value={newData.ppdpackage}  >
                                <option value="" disabled>Please Select</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginLeft: "30%" }}>
                        <button className="btn1" onClick={() => {
                            SetPage(2);
                            SetPageNav("Add")
                            SetIsEdit(true)
                        }}>Previous</button>
                        <button className="btn2" onClick={() => {
                            SetPage(4);
                            SetPageNav("Location")
                            SetIsEdit(true)
                            if (file != null || file != undefined) {
                                SetnewData({
                                    ...newData,
                                    propertyimage: file
                                })
                            }
                        }} >Save & Next</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
}