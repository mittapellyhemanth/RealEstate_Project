import { useContext, } from "react"
import { PropertyContext } from "./ContextProvider"




export default function PageIndicator() {

    const { PageNav, IsEdit } = useContext(PropertyContext);

    return <div>
        {PageNav === "Basic" && <div className="Indicator">
            {IsEdit === true ?
                <h2 className="prop_heading">Update Property</h2> :
                <h2 className="prop_heading" 
                    style={{fontSize:"25px"}}
                    >Add New Property</h2>
            }
            <div className="page_indicator" style={{padding:"20px",margin:"10px", height:"40px", width:"80%"}}>
                <div className="indi blue">Basic Detail</div>
                <div className="indi">Property Detail</div>
                <div className="indi">General Info</div>
                <div className="indi">Location Info</div>
            </div>
        </div>}
        {PageNav === "Add" && <div className="Indicator">
            {IsEdit === true ?
                <h2 className="prop_heading">Update Property</h2> :
                <h2 className="prop_heading">Add New Property</h2>
            }
            <div className="page_indicator" style={{padding:"20px",margin:"10px", height:"40px", width:"80%"}}>
                <div className="indi">Basic Detail</div>
                <div className="indi blue">Property Detail</div>
                <div className="indi">General Info</div>
                <div className="indi">Location Info</div>
            </div>
        </div>}
        {PageNav === "General" && <div className="Indicator">
            {IsEdit === true ?
                <h2 className="prop_heading">Update Property</h2> :
                <h2 className="prop_heading">Add New Property</h2>
            }
            <div className="page_indicator" style={{padding:"20px",margin:"10px", height:"40px", width:"80%"}}>
                <div className="indi">Basic Detail</div>
                <div className="indi">Property Detail</div>
                <div className="indi blue">General Info</div>
                <div className="indi ">Location Info</div>
            </div>
        </div>}
        {PageNav === "Location" && <div className="Indicator">
            {IsEdit === true ?
                <h2 className="prop_heading">Update Property</h2> :
                <h2 className="prop_heading">Add New Property</h2>
            }
            <div className="page_indicator" style={{padding:"20px",margin:"10px", height:"40px", width:"80%"}}>
                <div className="indi">Basic Detail</div>
                <div className="indi">Property Detail</div>
                <div className="indi">General Info</div>
                <div className="indi blue">Location Info</div>
            </div>
        </div>}

    </div>

}