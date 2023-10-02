import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './addProperty.css';

function BasicInfo({ nextStep, HandleFormData, values }) {
    const navigate = useNavigate();
    useEffect(() => console.log(values), [values]);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    function onSubmit() {
      nextStep();
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='basicinfo'
            style={{
                padding: "0px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                display: "flex",
                // height: "auto",
                flexDirection: "column",
                justifyContent: "space-around",
                // fontWeight: "bold",
            }}
        >
            {/* first row  */}
            <div
                className="row"
                style={{
                    textAlign: "start",
                    color: "#7D7D7D",
                    marginTop:"10px"
                }}
            >
                {/* Property Type req */}
                <div className='col'>
                    <label>Property Type</label>
                    <select
                        defaultValue={values.property}
                        {...register("property", {
                            required: "* Select any one",
                        })}
                        onChange={HandleFormData("property")}
                        className="custom-select"
                        id="inputGroupSelect01"
                    >
                        <option disabled value="">Select Property Type</option>
                        <option value="Plot">Plot</option>
                        <option value="House">House</option>
                        <option value="Flat">Flat</option>
                        <option value="N/A">N/A</option>

                    </select>

                </div>
                {/* Negotiable  */}
                <div className="col">
                    <label>Negotiable</label>
                    <select
                        defaultValue={values.negotiable}
                        // {...register("negotiable", {
                        //     required: "* Select any one",
                        // })}
                        onChange={HandleFormData("negotiable")}
                        className="custom-select"
                        id="inputGroupSelect01"
                    >
                        <option disabled value="">Select Negotable</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

            </div>
            <div className="row" style={{ marginTop: "10px" }}>
                <div className="col error">{errors.type && errors.type.message}</div>
            </div>
            <div
                className="row"
                style={{
                    textAlign: "start",
                    color: "#7D7D7D",
                }}
            >
                <div className='col'>
                    <label htmlFor='exampleForm2'>Price</label>
                    <input
                        value={values.price}
                     
                        onChange={HandleFormData("price")}
                        type="number"
                        id="price"
                        placeholder='Example:₹10000'
                        className='form-control desc'
                    />
                </div>

                <div className='col'>
                    <label>Ownership</label>
                    <select
                        defaultValue={values.ownership}
                        onChange={HandleFormData("ownership")}
                        className="custom-select"
                        id="inputGroupSelect01"
                    >
                        <option disabled value="">Select Ownership</option>
                        <option value="Joint">Joint</option>
                        <option value="Assets">Assets</option>
                        <option value="Single">Single</option>
                        <option value="N/A">N/A</option>

                    </select>

                </div>

            </div>
            <div
                className='row'
                style={{
                    textAlign: "start",
                    color: "#7D7D7D",
                }}
            >
                <div className='col'>
                    <label>Property Age</label>
                    <select
                        defaultValue={values.propertyAge}
                        onChange={HandleFormData("propertyAge")}
                        className="custom-select"
                        id="inputGroupSelect01">
                        <option disabled value="">
                            Select Property Age
                        </option>
                        <option value="Old">Old</option>
                        <option value="New">New</option>
                        <option value="N/A">N/A</option>
                    </select>
                </div>

                <div className='col'>
                    <label>Property Approved</label>
                    <select
                        defaultValue={values.propApproved}
                        onChange={HandleFormData("propApproved")}
                        className="custom-select"
                        id="inputGroupSelect01">
                            <option disabled value="">
                            Select Approved
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="N/A">N/A</option>
                    </select>
                </div>
            </div>
            {/* Fourth row */}
            <div className='row'
                style={{
                    marginTop:"10px",
                    textAlign: "start",
                    color: "#7D7D7D",
                }}
            >
                <div className="col">
          <label htmlFor="exampleForm2">Property Description</label>
          <input
            type="text"
            value={values.propDescription}
            onChange={HandleFormData("propDescription")}
            id="exampleForm2"
            placeholder="Property Description"
            className="form-control desc"
          ></input>
        </div>

                <div className='col'>

                    <label>Bank Loan</label>
                    <select
                        onChange={HandleFormData("bankLoan")}
                        defaultValue={values.bankLoan}
                        className="custom-select"
                        id="inputGroupSelect01"
                    >
                        <option disabled value="">
                            Select Bank Loan
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="N/A">N/A</option>

                    </select>
                </div>

            </div>

            <div
            style={{
                marginTop:"15px",
                minWidth:"100%",
                alignSelf:"center",
                display:"flex",
                justifyContent:"space-evenly",
            }}
            >
                <button style={{color:"white",backgroundColor:"#6AB4F8",boxShadow:"0px 13px 25px rgba(0, 0, 0, 0.15)",borderRadius:"500px",fontWeight:"600", border:"none"}} onClick={()=> navigate("/home")} className="btncan button">Cancel</button>
                <button style={{color:"white",backgroundColor:"#4C57B6",boxShadow:"0px 13px 25px rgba(0, 0, 0, 0.15)",borderRadius:"500px",fontWeight:"600", border:"none"}} type='submit' className='btncan button'>Save & Continue</button>

            </div>
        </form>
    );
}

export default BasicInfo