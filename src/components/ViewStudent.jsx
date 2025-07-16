import React, { useEffect, useState } from 'react'
import StudentNavBar from './StudentNavBar'
import axios from 'axios'

export const ViewStudent = () => {
  const [studentData,changeStudentData]=useState(
{
            "status": "success", "data": []
        }      
      )

     const fetchData=()=>{
           axios.get(" http://18.144.111.41/view_all_students.php").then(
            (response)=>{
              changeStudentData(response.data)
            }
            ).catch()
     }


         useEffect(()=>{fetchData()}, [])



  return (
    <div style={{ backgroundColor: '#e4c4a4ff', minHeight: '100vh', paddingBottom: '30px' }}>
    <div>
        <StudentNavBar/>
         <h2 style={{ color: 'black', textAlign: 'center' }}>ALL STUDENTS</h2>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
  <thead>
    <tr>
       <th scope="col">Id</th>
      <th scope="col">Name</th>
     <th scope="col">Rollno</th>
      <th scope="col">Admission no</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
    {studentData.data.map(
      (value,index)=>{
        return (
          <tr>
     <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.roll_number}</td>
      <td>{value.admission_number}</td>
      <td>{value.college}</td>
    </tr>
        )
      }
       
    )}
   </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
