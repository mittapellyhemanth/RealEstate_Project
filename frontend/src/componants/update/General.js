import React, { useEffect } from 'react';
import { AiFillCamera } from "react-icons/ai";
import { useForm } from "react-hook-form";
import './addProperty.css';

const General = ({ nextStep, addImage, prevStep, HandleFormData, values, status }) => {
  useEffect(() => console.log(values), [values]);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  function onSubmit() {
    nextStep();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="basicinfo"
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
      <div className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>Name</label>
          <input
            value={values.name}
            {...register("name", {
              required: "* Enter Name",
              minLength: {
                value: 4,
                message: "Enter Full name"
              },
            })}
            onChange={HandleFormData("name")}
            type="text"
            id="name"
            placeholder='Enter Name'
            className='form-control desc'
          />
        </div>

        <div className='col'>
          <label>Mobile</label>
          <input
            {...register("mobile", {
              required: "* Enter Mobile No",
              minLength: {
                value: 10,
                message: "Enter 10 digit",
              }
            })}
            maxLength="10"
            value={values.mobile}
            onChange={HandleFormData("mobile")}
            type="number"
            id="mobile"
            placeholder='Enter Mobile Number'
            className='form-control desc'
          />
        </div>
      </div>

      {/* Error Message */}
      <div className='row' style={{ marginTop: "10px" }}>
        <div className='col error'>{errors.name && errors.name.message}</div>
        <div className='col error'>{errors.mobile && errors.mobile.message}</div>
      </div>

      {/* Second Row */}
      <div
        className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>Posted By</label>
          <select
            defaultValue={values.postedBy}
            onChange={HandleFormData("postedBy")}
            className="custom-select"
            id="postedBy"
          >
            <option disabled value="">Select Owner</option>
            <option value="Owner">Owner</option>
            <option value="Lender">Lender</option>
            <option value="Agent">Agent</option>
            <option value="N/A">N/A</option>

          </select>
        </div>

        <div className='col'>
          <label>Sale Type</label>
          <select
            defaultValue={values.saleType}
            onChange={HandleFormData("saleType")}
            className="custom-select"
            id="saleType"
          >
            <option disabled value="">Please Select</option>
            <option value="Discount">Discount</option>
            <option value="Resale">Resale</option>
            <option value="Market Value">Market Value</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
      </div>

      {/* Third Row */}
      <div
        className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>Featured Package</label>
          <select
            defaultValue={values.package}
            onChange={HandleFormData("package")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">
              PLease Select
            </option>
            <option value="Gym">Gym</option>
            <option value="Park">Park</option>
            <option value="Clinic">Clinic</option>
            <option value="Mart">Mart</option>
            <option value="All">All</option>

          </select>
        </div>

        <div className='col'>
          <label>PPD Package</label>
          <select
            defaultValue={values.ppdPackage}
            onChange={HandleFormData("ppdPackage")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">Please Select</option>
            <option value="Class">Class</option>
            <option value="Jublee">Jublee</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>
      </div>

      {/* Image */}
      {status !== "update" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            width: "300px"
          }}
        >
          <div
            className="upload"
            style={{
              marginTop: "15px",
              marginLeft: "10px",
              fontSize: "25px",
              alignSelf: "flex-start",

            }}
          >
            <button type='button' className='btn-warning'>
              <AiFillCamera />
              <input type='file' required onChange={(e) => addImage(e)} />
            </button>
          </div>
          <span
            style={{
              alignSelf: "flex-start",
              marginTop: "50px",
              marginLeft: "15px",
              fontSize: "18px",
              color: "#7D7D7D"
            }}
          >
            Add Photo
          </span>
        </div>
      )}

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
        <button style={{ color: "white", backgroundColor: "#4C57B6", boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)", borderRadius: "500px", fontWeight: "600", border: "none" }} type='submit' className='btncan button'>Save & Continue</button>

      </div>

    </form>
  );
}

export default General