import React from 'react'
import StudentNavBar from './StudentNavBar'

const DeleteStudent = () => {
  return (
    <div>
        <StudentNavBar/>
          <div style={{ backgroundColor: '#FAF0E6', minHeight: '100vh', paddingBottom: '30px' }}>
         <div className="bg-light p-4 rounded shadow">
        <h2 style={{ color: "brown", textAlign: "center" }}>DELETE STUDENT</h2>
         
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <input type="number" className="form-control" />
                            <div className="label form-label">Rollno</div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">DELETE</button>
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

export default DeleteStudent