import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";

const PropertyDetail = ({ nextStep, HandleFormData, values, prevStep }) => {
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
        marginBottom: "150px",
        marginTop: "50px",
        padding: "30px 10px",
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
        className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>Length</label>
          <input
            {...register("length", {
              required: "Enter Length",
              min: {
                value: 1,
                message: "* Invalid Length",
              },

            })}
            value={parseInt(values.length)}
            onChange={HandleFormData("length")}
            type="number"
            id="length"
            placeholder='Example: 1000'
            className='form-control desc'
          />
        </div>
        <div className='col'>
          <label>Breadth</label>
          <input
            {...register("breadth", {
              required: "* Enter Breadth",
              min: {
                value: 1,
                message: "* Invalid Breadth",
              },
            })}
            value={parseInt(values.breadth)}
            onChange={HandleFormData("breadth")}
            type="number"
            id="breadth"
            placeholder="Example: 1000"
            className="form-control desc"
          />
        </div>
      </div>

      {/* Error Message */}
      <div className='row' style={{ marginTop: "10px" }}>
        <div className='col error'>
          {errors.length && errors.length.message}
        </div>
        <div className='col error'>
          {errors.breadth && errors.breadth.message}

        </div>
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
          <label>Total Area</label>
          <input
            readOnly
            value={parseInt(values.length) * parseInt(values.breadth)}
            type="number"
            id="name"
            placeholder="Example: 100000"
            className="form-control desc"
          ></input>
        </div>

        <div className='col'>
          <label>Area unit</label>
          <select
            defaultValue={values.areaUnit}
            onChange={HandleFormData("areaUnit")}
            className="custom-select"
            id="postedBy"
          >
            <option disabled value="">Area Unit</option>
            <option value="Square Centimeter">Sq cm</option>
            <option value="Square Feet">Sq feet</option>
            <option value="Square meter">Sq mts</option>
            <option value="Square Acre">Acre</option>
            <option value=" Others">Others</option>
          </select>
        </div>
      </div>

      {/* Third Row */}
      <div className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>No of BHK</label>
          <input
            value={values.bhk}
            onChange={HandleFormData("bhk")}
            type="number"
            id="bhk"
            placeholder="Enter No of BHK"
            className="form-control desc"
          />
        </div>
        <div className='col'>
          <label>No of Floor</label>
          <input
            value={values.floorNum}
            onChange={HandleFormData("floorNum")}
            type="number"
            id="length"
            placeholder="Enter No of Floor"
            className="form-control desc"
          />
        </div>
      </div>
      {/* Fourth Row */}
      <div
        className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>Attached</label>
          <select
            defaultValue={values.attached}
            onChange={HandleFormData("attached")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">Select Attached</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className='col'>
          <label>Western Toilet</label>
          <select
            defaultValue={values.westToilet}
            onChange={HandleFormData("westToilet")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option disabled value="">Select Western Toilet</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      {/* Fifth Row */}
      <div
        className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>Furnished</label>
          <select
            defaultChecked={values.furnished}
            onChange={HandleFormData("furnished")}
            className="custom-select"
            id="furnished"
          >
            <option disabled value="">Select Furnished</option>

            <option value="Yes">Yes</option>
            <option value="NO">NO</option>

          </select>
        </div>

        <div className='col'>
          <label>Car Parking</label>
          <select
            defaultValue={values.parking}
            onChange={HandleFormData("parking")}
            className="custom-select"
            id="parking"
          >
            <option disabled value="">Select Car Parking</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      {/* Sixth Row */}
      <div
        className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D"
        }}
      >
        <div className='col'>
          <label>Lift</label>
          <select
            defaultValue={values.lift}
            onChange={HandleFormData("lift")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value='' disabled>Select Lift</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>

          </select>
        </div>

        <div className='col'>
          <label>Electricity</label>
          <input
            value={values.electricity}
            onChange={HandleFormData("electricity")}
            type="text"
            id="electricity"
            placeholder="Example: 3 Phase"
            className="form-control desc"
          />
        </div>
      </div>
      {/* Seventh Row */}
      <div
        className='row'
        style={{
          textAlign: "start",
          color: "#7D7D7D",
          width: "52%"
        }}
      >
        <div className='col'>
          <label>Facing</label>
          <select
            defaultValue={values.facing}
            onChange={HandleFormData("facing")}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option value='' disabled>Select Facing</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>

          </select>
        </div>
        </div>
      

      {/* Buttom Buttons */}
      <div
            style={{
                marginTop:"15px",
                minWidth:"100%",
                alignSelf:"center",
                display:"flex",
                justifyContent:"space-evenly",
            }}
            >
                <button style={{ color: "white", backgroundColor: "#6AB4F8", boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)", borderRadius: "500px", fontWeight: "600", border: "none" }} onClick={prevStep} className="btncan button">Previous</button>
        <button style={{ color: "white", backgroundColor: "#4C57B6", boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)", borderRadius: "500px", fontWeight: "600", border: "none" }} type='submit' className='btncan button'>Save & Continue</button>

            </div>
      
    </form>
  )
}

export default PropertyDetail