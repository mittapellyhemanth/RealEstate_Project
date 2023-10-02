

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./DesktopPages/Home";
import SideBar from "./componants/Sidebar";
import LogIn from './DesktopPages/Login';
import PropertyView from './DesktopPages/PropertyView';
import { ContextFunction } from './componants/Add_property/ContextProvider';
import BasicDetail from './componants/Add_property/BasicDetail';
import PropertyDetail from './componants/Add_property/PropertyDetail';
import General_info from './componants/Add_property/General_info';
import Location from './componants/Add_property/Location_info';
import Edit from './EditProperty.js/Edit';


import SignUp from './DesktopPages/Signup';
import './componants/Add_property/Addproperty.css'
import Editproperty from './DesktopPages/Editproperty';
import ImageView from './componants/propertyListing/ImageView';


function App() {



  return (
    <ContextFunction>
     
      <BrowserRouter>
      
        <Routes>
           <Route path='/' element={<LogIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/propertyView' element={<PropertyView />} />
          <Route path='/editproperty' element={<Edit/>}/>
          <Route path='/image' element={<ImageView/>}/> 
          <Route exact path="/addproperty/basic_detail" element={<BasicDetail />} />
          <Route exact path="/addproperty/property_detail" element={<PropertyDetail />} />
          <Route exact path="/addproperty/general_info" element={<General_info />} />
          <Route exact path="/addproperty/location_info" element={<Location />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>  
        
      </BrowserRouter>
 
  
    </ContextFunction>
  );
}

export default App;
