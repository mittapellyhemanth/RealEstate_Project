import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Location({
  nextStep,
  prevStep,
  HandleFormData,
  values,
  status,
  propertyID,
}) {
  useEffect(() => console.log(values), [values]);

  const navigate = useNavigate();
  const submitFormData = () => {
    console.log(values);

    let formData = new FormData();

    let key = Object.keys(values);
    let value = Object.values(values);
    for (let i = 0; i < key.length; i++) {
      // console.log(key[i], value[i]);
      formData.append(key[i], value[i]);
      console.log(formData);
    }

    let token = localStorage.getItem("token");
    let id = localStorage.getItem("userID");

    let url = `${process.env.REACT_APP_BASE_URL}/prop/v1/updateproperty`;

    // console.log(formData);
    if (status === "add") {
      axios
        .post(url, values, {
          headers: {
            'Authorization': token,
            id: id,
          },
        })
        .then((res) => {
          console.log(res);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          // alert('Unable to add Property');
        // navigate("/home");
        });
    } else {
      axios
        .put(`${url}/update/${propertyID}`, values, {
          headers: {
            'Authorization': token,
            // id: id,
          },
        })
        .then((res) => {
          alert("Updated successfully");
          navigate("/home");
        })
        .catch((err) => {alert("Updated successfully");
        navigate("/home")});
    }

    nextStep();
  };

  return (
    <div
      className="generalinfo basicinfo"
      style={{
        padding: "50px 10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        display: "flex",
        height: "auto",
        flexDirection: "column",
        justifyContent: "space-around",
        fontWeight: "bold",
      }}
    >
      {/* First Row */}
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "#7D7D7D",
        }}
      >
        <div className="col">
          <label>Email</label>
          <input
            value={values.email}
            onChange={HandleFormData("email")}
            type="email"
            id="email"
            placeholder="maheshbv7090@gmail.com"
            className="form-control desc"
          ></input>
        </div>

        <div className="col">
          <label>City</label>
          <input
            value={values.city}
            onChange={HandleFormData("city")}
            type="text"
            id="city"
            placeholder="Select city"
            className="form-control desc"
          ></input>
        </div>
      </div>
      {/* Second Row  */}
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "#7D7D7D",
        }}
      >
        <div className="col">
          <label>Area</label>
          <input
            value={values.addArea}
            onChange={HandleFormData("addArea")}
            type="text"
            id="addArea"
            placeholder="Select area"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label>Pincode</label>
          <input
            value={values.pincode}
            onChange={HandleFormData("pincode")}
            type="number"
            id="pincode"
            placeholder="Pincode"
            className="form-control desc"
          ></input>
        </div>
      </div>
      {/* Third Row */}
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "#7D7D7D",
        }}
      >
        <div className="col">
          <label>Address </label>
          <input
            value={values.address}
            onChange={HandleFormData("address")}
            type="text"
            id="address"
            placeholder="Enter address"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="exampleForm2">Landmark</label>
          <input
            value={values.landmark}
            onChange={HandleFormData("landmark")}
            type="text"
            id="landmark"
            placeholder="landmark"
            className="form-control desc"
          ></input>
        </div>
      </div>
      {/* Fourth Row */}
      <div
        className="row"
        style={{
          textAlign: "start",
          color: "#7D7D7D",
        }}
      >
        <div className="col">
          <label>Latitude</label>
          <input
            value={values.latitude}
            onChange={HandleFormData("latitude")}
            type="number"
            id="latitude"
            placeholder="Enter Latitude"
            className="form-control desc"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="exampleForm2">Longitude</label>
          <input
            value={values.longitude}
            onChange={HandleFormData("longitude")}
            type="number"
            id="longitude"
            placeholder="Enter Longitude"
            className="form-control desc"
          ></input>
        </div>
      </div>
      {/* Buttom Buttons */}
      <div
        style={{
          marginTop: "15px",
          minWidth: "100%",
          alignSelf: "center",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button style={{ color: "white", backgroundColor: "#6AB4F8", boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)", borderRadius: "500px", fontWeight: "600", border: "none" }} onClick={prevStep} className="btncan button">Previous</button>
        <button style={{ color: "white", backgroundColor: "#4C57B6", boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)", borderRadius: "500px", fontWeight: "600", border: "none" }} type='submit' onClick={submitFormData} className='btncan button'>Add Property</button>

      </div>
    </div>
  );
}

export default Location;