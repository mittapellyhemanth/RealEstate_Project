import { useEffect, useState } from "react";
import BasicEdit from "./BasicEdit";
import PropertyEdit from "./PropertyEdit";
import GeneralEdit from "./GeneralEdit";
import LocationEdit from "./LocationEdit";

export default function Edit() {

    const [page, SetPage] = useState(1)
    
    let form;

    switch (page) {
        case 1:
            form = <BasicEdit SetPage ={SetPage}  />;
            break;
        case 2:
            form = <PropertyEdit SetPage ={SetPage}   />;
            break;
        case 3:
            form = <GeneralEdit SetPage ={SetPage}  />;
            break;
        case 4:
            form = <LocationEdit SetPage ={SetPage}  />;
            break;
    }


    return <div>
        {form}
    </div>


}