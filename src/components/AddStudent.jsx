import React, { useState } from 'react'
import StudentNavBar from './StudentNavBar'
import axios from 'axios'

const AddStudent = () => {
    const [input, changeInput] = useState(
        {
            "name":"",
            "roll_number":"",
            "admission_number":"",
            "college":""
        })
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        console.log(input)
        axios.post('http://18.144.111.41/student_api.php',input).then(
            (response)=>{
                alert("added successfully")
            }
        ).catch()
    }
    return (
        <div>
            <StudentNavBar />
            <div style={{ backgroundColor: '#FAF0E6', minHeight: '100vh', paddingBottom: '30px' }}>
         <div className="bg-light p-4 rounded shadow">
        <h2 style={{ color: "green", textAlign: "center" }}>ADD STUDENT</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="label form-label">Name</div>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="label form-label">Roll no</div>
                                <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="label form-label">Admission no</div>
                                <input type="number" className="form-control" name='admission_number'  value={input.admission_number} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="label form-label">College</div>
                                <input type="text" className="form-control" name='college' value={input.college} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 d-flex justify-content-center mt-3">
                                <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

                        
export default AddStudent