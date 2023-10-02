
// This page is providing data to every component using Context

import { createContext } from "react";
import { useState } from "react";


export const PropertyContext = createContext(""); // Creating context to pass data


export function ContextFunction({ children }) {

    const [BasicDetail, SetBasicDetail] = useState({   // This function store all the
        // information of Basic Detail
        property_type: "",
        price: "",
        negotiable: "",
        ownerShip: "",
        property_age: "",
        property_approved: "",
        property_description: "",
        bank_loan: ""

    })
    const [PropertyDetail, SetPropertyDetail] = useState({
        // This function will store data for  PropertyDetail page
        length: "",
        breath: "",
        area: "",
        area_unit: "",
        bhk: "",
        floor: "",
        attached: "",
        western: "",
        furnished: "",
        parking: "",
        lift: "",
        electricity: "",
        facing: ""

    })
    const [General_info, SetGeneral_info] = useState({
        // This state will temporary store page General_info Data
        owner_name: "",
        mobile: "",
        postedby: "",
        saletype: "",
        featured: "",
        ppdpackage: ""

    })

    const [Location_info, SetLocation_info] = useState({
        // It would store info about Location page
        email: "",
        city: "",
        addressarea: "",
        pincode: "",
        address: "",
        landmark: "",
        longitude: "",
        latitude: ""
    })

    const [AddProperty, SetAddProperty] = useState({
        // It will store all detail od property and this data will be saved into data base
    })

    // This state would remember data when user click on edit
    const [newData, SetnewData] = useState();

    // This page would track page navigation and propvide that data to Page Indicator
    const [PageNav, SetPageNav] = useState("Basic")

    // This State would check that wether is it AddProperty or EditProperty

    const [IsEdit, SetIsEdit] = useState();
    const [accountCreated,setAccountCreated] = useState('');
    const [error,setError] = useState('')
// console.log(IsEdit)

    // console.log(PageNav)

    return <PropertyContext.Provider
        value={{
            accountCreated,
            setAccountCreated,
            error,
            setError,
            BasicDetail,
            SetBasicDetail
            , PropertyDetail,
            SetPropertyDetail,
            General_info,
            SetGeneral_info,
            Location_info,
            SetLocation_info,
            AddProperty,
            SetAddProperty,
            newData,
            SetnewData,
            PageNav,
            SetPageNav,
            IsEdit,
            SetIsEdit
        }}>
        {children}
    </PropertyContext.Provider>
}
