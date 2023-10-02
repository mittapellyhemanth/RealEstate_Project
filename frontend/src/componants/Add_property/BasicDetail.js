// This page takes basic detail of property in a form

import { useContext } from "react";
import Button from "./Button";
import { PropertyContext } from "./ContextProvider";
import PageIndicator from "./PageIndicator";
import { OnClickBasicDetail } from "./OnClickLogic";
import Sidebar from "../Sidebar";
import Nav from "../Nav";

export default function BasicDetail() {

    
    const { BasicDetail, SetBasicDetail}=useContext(PropertyContext)


    console.log(BasicDetail);
    return <div className="router">
   <div className="Sidebar"> <Sidebar/>
    
    </div>
    <div className="second_wrapper">
    <div className="Nav"><Nav/></div>
    <div>
        <PageIndicator />
        
        <form action="#" className="outer_form" >
            <div className="form">

                <div className="form_first">
                    <label htmlFor="property_type">Property Type</label>
                    <br />
                    <select id="property_type"
                        onChange={(e) => {
                            OnClickBasicDetail(e, "property_type",BasicDetail, SetBasicDetail)
                        }}
                        required
                        value={BasicDetail.property_type}
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
                        OnClickBasicDetail(e, "price",BasicDetail, SetBasicDetail)
                    }} required value={BasicDetail.price} />
                    <br />
                    <label htmlFor="property_age">Property Age</label>
                    <br />
                    <select id="property_age" onChange={(e) => {
                        OnClickBasicDetail(e, "property_age",BasicDetail, SetBasicDetail)
                    }} required value={BasicDetail.property_age} >
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
                        OnClickBasicDetail(e, "property_description",BasicDetail, SetBasicDetail)
                    }} value={BasicDetail.property_description} />
                    <br />

                </div>
                <div className="form_Second">
                    <label htmlFor="negotiable">Negotiable</label>
                    <br />
                    <select id="negotiable" onChange={(e) => {
                        OnClickBasicDetail(e, "negotiable",BasicDetail, SetBasicDetail)
                    }} value={BasicDetail.negotiable} >
                        <option value="" disabled>Negotiable</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <label htmlFor="ownerShip">Ownership</label>
                    <br />
                    <select id="ownerShip" onChange={(e) => {
                        OnClickBasicDetail(e, "ownerShip",BasicDetail, SetBasicDetail)
                    }} required value={BasicDetail.ownerShip} >
                        <option value="" disabled >Select Ownership</option>
                        <option>Indvidual</option>
                        <option>Joint</option>
                    </select>
                    <br />
                    <label htmlFor="property_approved">Property Approved</label>
                    <br />
                    <select id="property_approved" onChange={(e) => {
                        OnClickBasicDetail(e, "property_approved",BasicDetail, SetBasicDetail)
                    }} value={BasicDetail.property_approved} >
                        <option value="" disabled>Property Approved</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br />
                    <label htmlFor="bank_loan">Bank Loan</label>
                    <br />
                    <select id="bank_loan" onChange={(e) => {
                        OnClickBasicDetail(e, "bank_loan",BasicDetail, SetBasicDetail)
                    }} required value={BasicDetail.bank_loan}  >
                        <option value="" disabled>Select Bank Loan</option>
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>
                </div>
            </div>
            <Button
                backWardPath={"/home"}
                forWardPath={"/addproperty/property_detail"}
                children1={"Cancel"}
                children2={"Save & Next"} 
                nextpage={"Add"}
                prevPage={"Basic"}
                />
                
        </form>
        </div>
    </div>
    </div>
}