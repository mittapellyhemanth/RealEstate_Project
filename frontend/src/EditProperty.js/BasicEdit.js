import { useContext } from "react"
import { PropertyContext } from "../componants/Add_property/ContextProvider";
import { useNavigate } from "react-router-dom";
import Sidebar from '../componants/Sidebar';
import Nav from '../componants/Nav';
import PageIndicator from '../componants/Add_property/PageIndicator';







export default function BasicEdit({ SetPage }) {


    const { newData, SetnewData, SetPageNav,SetIsEdit } = useContext(PropertyContext)
    // console.log(newData);
    const Navigate = useNavigate();





    return <div className="router">
        <div className="Sidebar"> <Sidebar />

        </div>
        <div className="second_wrapper">
            <div className="Nav"><Nav /></div>
            <div>
                <PageIndicator />
                <form action="#" className="outer_form" >
                    <div className="form">

                        <div className="form_first">
                            <label htmlFor="property_type">Property Type</label>
                            <br />
                            <select id="property_type"
                                onChange={(e) => {
                                    SetnewData({
                                        ...newData,
                                        property_type: e.target.value
                                    })
                                }}
                                required
                                value={newData.property_type}
                            >
                                <option value="" disabled >Select Property Type</option>
                                <option value="Home">Home</option>
                                <option value="Plot">Plot</option>
                                <option value="Apartment">Apartment</option>
                            </select>
                            <br />
                            <label htmlFor="price">Price</label>
                            <br />
                            <input type="number" id="price" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    price: e.target.value
                                })
                            }} required value={newData.price} />
                            <br />
                            <label htmlFor="property_age">Property Age</label>
                            <br />
                            <select id="property_age" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    property_age: e.target.value
                                })
                            }} required value={newData.property_age} >
                                <option value="" disabled >Select Property Age</option>
                                <option>20</option>
                                <option>35</option>
                                <option>50</option>
                                <option>70</option>
                                <option>80</option>
                            </select>
                            <br />
                            <label htmlFor="property_description">Property Description</label>
                            <br />
                            <input type="text" id="property_description" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    property_description: e.target.value
                                })
                            }} value={newData.property_description} />
                            <br />

                        </div>
                        <div className="form_Second">
                            <label htmlFor="negotiable">Negotiable</label>
                            <br />
                            <select id="negotiable" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    negotiable: e.target.value
                                })
                            }} value={newData.negotiable} >
                                <option value="" disabled>Negotiable</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <br />
                            <label htmlFor="ownerShip">Ownership</label>
                            <br />
                            <select id="ownerShip" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    ownerShip: e.target.value
                                })
                            }} required value={newData.ownerShip} >
                                <option value="" disabled >Select Ownership</option>
                                <option>Indvidual</option>
                                <option>Joint</option>
                            </select>
                            <br />
                            <label htmlFor="property_approved">Property Approved</label>
                            <br />
                            <select id="property_approved" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    property_approved: e.target.value
                                })
                            }} value={newData.property_approved} >
                                <option value="" disabled>Property Approved</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <br />
                            <label htmlFor="bank_loan">Bank Loan</label>
                            <br />
                            <select id="bank_loan" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    bank_loan: e.target.value
                                })
                            }} required value={newData.bank_loan}  >
                                <option value="" disabled>Select Bank Loan</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginLeft: "30%" }}>
                        <button className="btn1" onClick={() => {
                            Navigate("/home");
                            SetPageNav("Basic")
                            SetIsEdit(true)
                        }}>Cancel</button>
                        <button className="btn2" onClick={() => {
                            SetPage(2);
                            SetPageNav("Add")
                            SetIsEdit(true)
                        }} >Save & Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}