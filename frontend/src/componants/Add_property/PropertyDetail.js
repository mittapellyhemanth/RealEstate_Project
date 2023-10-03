

// This is property detail page of add property

import { useContext,} from "react"
import Button from "./Button"
import { PropertyContext } from "./ContextProvider"
import PageIndicator from "./PageIndicator";
import { OnClickPropertyDetail } from "./OnClickLogic";
import Sidebar from "../Sidebar";
import Nav from "../Nav"
import Side from "./side";



export default function PropertyDetail() {
   
    const {PropertyDetail, SetPropertyDetail } = useContext(PropertyContext);

   
    console.log(PropertyDetail)
   

    return <div className="router">

<div className="Sidebar"> <Side/>
    
    </div>
    <div className="second_wrapper">
    <div className="Nav" ><Nav/></div>
    <div>
        <PageIndicator />
        <form className="outer_form">
            <div className="form">

                <div className="form_first">
                    <label htmlFor="length">Length</label>
                    <br />
                    <input type=" number" id="length" placeholder="Example 1000" onChange={(e) => {
                        OnClickPropertyDetail(e, "length",PropertyDetail, SetPropertyDetail);
                    }}
                        required
                        value={PropertyDetail.length}
                    />
                    <br />
                    <label htmlFor="area">Area</label>
                    <br />
                    <input type="number" id="area" onChange={(e) => {
                        OnClickPropertyDetail(e, "area",PropertyDetail, SetPropertyDetail);
                    }}
                        value={PropertyDetail.area}
                        required />
                    <br />
                    <label htmlFor="bhk">No. of BHK</label>
                    <br />
                    <select id="bhk" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "bhk",PropertyDetail, SetPropertyDetail);
                    }} required
                        value={PropertyDetail.bhk} >
                        <option value="" disabled>Select No. of BHK</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br />
                    <label htmlFor="attached">Attached</label>
                    <br />

                    <select id="attached" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "attached",PropertyDetail, SetPropertyDetail);
                    }} value={PropertyDetail.attached} >
                        <option value="" disabled >Attached</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br />
                    <label htmlFor="furnished">Furnished</label>
                    <br />
                    <select id="furnished" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "furnished",PropertyDetail, SetPropertyDetail);
                    }} required
                        value={PropertyDetail.furnished} >
                        <option value="" disabled >Select furnish</option>
                        <option>Fully Furnished</option>
                        <option>Partially Furnished</option>
                        <option>Unfurnished</option>
                    </select>
                    <br />
                    <label htmlFor="lift">Lift</label>
                    <br />
                    <select id="lift" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "lift",PropertyDetail, SetPropertyDetail);
                    }}
                        value={PropertyDetail.lift}>
                        <option value="" disabled>Select Lift</option>
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>
                    <br />
                    <label htmlFor="facing">Facing</label>
                    <br />
                    <select id="facing" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "facing",PropertyDetail, SetPropertyDetail);
                    }} required
                        value={PropertyDetail.facing} >
                        <option value="" disabled >Select Facing</option>
                        <option>East</option>
                        <option>West</option>
                        <option>North</option>
                        <option>South</option>
                    </select>
                    <br />
                </div>
                <div className="form_second">
                    <label htmlFor="breath">Breath</label>
                    <br />
                    <input type="number" id="breath" placeholder="Example 700" onChange={(e) => {
                        OnClickPropertyDetail(e, "breath",PropertyDetail, SetPropertyDetail);
                    }}
                        required
                        value={PropertyDetail.breath} />
                    <br />
                    <label htmlFor="area_unit">Area Unit</label>
                    <br />
                    <select id="area_unit" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "area_unit",PropertyDetail, SetPropertyDetail);
                    }} required
                        value={PropertyDetail.area_unit} >
                        <option value="" disabled>Area Unit</option>
                        <option>Sq. Feet</option>
                        <option>Sq. Inch</option>
                        <option>Sq. Meter</option>
                    </select>
                    <br />
                    <label htmlFor="floor" >No. of floor</label>
                    <br />
                    <select id="floor" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "floor",PropertyDetail, SetPropertyDetail);
                    }} value={PropertyDetail.floor} >
                        <option value="" disabled >Select No. of Floor</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br />
                    <label htmlFor="western">Western Toilet</label>
                    <br />
                    <select id="western" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "western",PropertyDetail, SetPropertyDetail);
                    }}
                        value={PropertyDetail.western} >
                        <option value="" disabled>Select Western Toilet</option>
                        <option>Avaialbe</option>
                        <option>Not Available</option>
                    </select>
                    <br />
                    <label htmlFor="parking">Car Parking</label>
                    <br />
                    <select id="parking" className='select-box' onChange={(e) => {
                        OnClickPropertyDetail(e, "parking",PropertyDetail, SetPropertyDetail);
                    }}
                        value={PropertyDetail.parking} >
                        <option value="" disabled >Select Car Parking</option>
                        <option>Avaialbe</option>
                        <option>Not Available</option>
                    </select>
                    <br />
                    <label htmlFor="electricity">Electricity</label>
                    <br />
                    <input type="text" id="electricity" placeholder="Example 3 phase" onChange={(e) => {
                        OnClickPropertyDetail(e, "electricity",PropertyDetail, SetPropertyDetail);
                    }}
                        value={PropertyDetail.electricity} />
                </div>
            </div>
            <Button
                backWardPath={"/addproperty/basic_detail"}
                forWardPath={"/addproperty/general_info"}
                children1={"Previous"}
                children2={"Save & Next"}
                nextpage={"General"}
                prevPage={"Basic"} />
        </form>
        </div>
        </div>
    </div>
}