import { useContext } from "react"
import { PropertyContext } from "../componants/Add_property/ContextProvider";
import Sidebar from '../componants/Sidebar';
import Nav from '../componants/Nav';
import PageIndicator from '../componants/Add_property/PageIndicator';
import Side from "../componants/Add_property/side";


export default function PropertyEdit({ SetPage }) {


    const { newData, SetnewData, SetPageNav,SetIsEdit } = useContext(PropertyContext)


    return <div className="router">
        <div className="Sidebar"> <Side />

        </div>
        <div className="second_wrapper">
            <div className="Nav"><Nav /></div>
            <div>
                <div className="PageIndicator">

                <PageIndicator />
                </div>
                <div className="menu">

                <form className="outer_form">
                    <div className="form">

                        <div className="form_first">
                            <label htmlFor="length">Length</label>
                            <br />
                            <input type=" number" id="length" placeholder="Example 1000" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    length: e.target.value
                                })
                            }}
                                required
                                value={newData.length}
                            />
                            <br />
                            <label htmlFor="area">Area</label>
                            <br />
                            <input type="number" id="area" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    area: e.target.value
                                })
                            }}
                                value={newData.area}
                                required />
                            <br />
                            <label htmlFor="bhk">No. of BHK</label>
                            <br />
                            <select id="bhk" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    bhk: e.target.value
                                })
                            }} required
                                value={newData.bhk} >
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
                                SetnewData({
                                    ...newData,
                                    attached: e.target.value
                                })
                            }} value={newData.attached} >
                                <option value="" disabled >Attached</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <br />
                            <label htmlFor="furnished">Furnished</label>
                            <br />
                            <select id="furnished" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    furnished: e.target.value
                                })
                            }} required
                                value={newData.furnished} >
                                <option value="" disabled >Select furnish</option>
                                <option>Fully Furnished</option>
                                <option>Partially Furnished</option>
                                <option>Unfurnished</option>
                            </select>
                            <br />
                            <label htmlFor="lift">Lift</label>
                            <br />
                            <select id="lift" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    lift: e.target.value
                                })
                            }}
                                value={newData.lift}>
                                <option value="" disabled>Select Lift</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>
                            <br />
                            <label htmlFor="facing">Facing</label>
                            <br />
                            <select id="facing" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    facing: e.target.value
                                })
                            }} required
                                value={newData.facing} >
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
                                SetnewData({
                                    ...newData,
                                    breath: e.target.value
                                })
                            }}
                                required
                                value={newData.breath} />
                            <br />
                            <label htmlFor="area_unit">Area Unit</label>
                            <br />
                            <select id="area_unit" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    area_unit: e.target.value
                                })
                            }} required
                                value={newData.area_unit} >
                                <option value="" disabled>Area Unit</option>
                                <option>Sq. Feet</option>
                                <option>Sq. Inch</option>
                                <option>Sq. Meter</option>
                            </select>
                            <br />
                            <label htmlFor="floor" >No. of floor</label>
                            <br />
                            <select id="floor" className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    floor: e.target.value
                                })
                            }} value={newData.floor} >
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
                                SetnewData({
                                    ...newData,
                                    western: e.target.value
                                })
                            }}
                                value={newData.western} >
                                <option value="" disabled>Select Western Toilet</option>
                                <option>Avaialbe</option>
                                <option>Not Available</option>
                            </select>
                            <br />
                            <label htmlFor="parking">Car Parking</label>
                            <br />
                            <select id="parking"  className='select-box' onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    parking: e.target.value
                                })
                            }}
                                value={newData.parking} >
                                <option value="" disabled >Select Car Parking</option>
                                <option>Avaialbe</option>
                                <option>Not Available</option>
                            </select>
                            <br />
                            <label htmlFor="electricity">Electricity</label>
                            <br />
                            <input type="text" id="electricity" placeholder="Example 3 phase" onChange={(e) => {
                                SetnewData({
                                    ...newData,
                                    electricity: e.target.value
                                });
                            }}
                                value={newData.electricity} />
                        </div>
                    </div>
                    <div style={{ marginLeft: "30%" }}>
                        <button className="btn1" onClick={() => {
                            SetPage(1)
                            SetPageNav("Basic")
                            SetIsEdit(true)
                        }}>Previous</button>
                        <button className="btn2" onClick={() => {
                            SetPage(3)
                            SetPageNav("General")
                            SetIsEdit(true)
                        }}>Save & Next</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>


}