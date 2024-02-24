import React from 'react'
import { FaHome } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
function HomeBody() {
  return (
    <div className='container-fluid '>

<div className="row" >
      <div className="col-sm-9 mb-5 " style={{ marginTop: '40px' }} >
        <div className="list-group ">
          <a href='#' className="list-group-item active" style={{ backgroundColor:'#428bca'}}>
            <h3 style={{ display: 'inline-block', margin: '5px' ,backgroundColor:'#428bca'}}>
              APJ Abdul Kalam Technological University e-Governance Portal
            </h3>
          </a>
        </div>

        <div className="list-group">
          {/* Institution Section */}
          <a href='#' className="list-group-item">
            <div style={{ display: 'inline-block', verticalAlign: 'top', margin: '0.4em 0px' }} className="login-icon">
              <span aria-hidden="true" className="glyphicon glyphicon-home"></span>
            </div>
            <h3 style={{ color: '#3ab0e2' }} className="list-group-item-heading login-title login-section">
             <span className='me-2'><FaHome size={70} /></span>Institutions
            </h3>
            <div style={{ display: 'inline-block', width: '90%' }}>
              <p className="list-group-item-text fs-6 ms-4  ">
              Institutions that are
                affiliated/applying for affiliation with APJ Abdul Kalam
                Technological University can click here to login to the e-Gov
                application. Institution users can perform activities related to
                affiliation, student registration and academics, make fee
                payments etc. Colleges can view the student records that
                includes personal information, admission information, attendance
                details, internal evaluation details, mark lists, student
                history and other details after logging on. For the programs
                offered by the university, colleges can view the curriculum and
                choose the courses for each branch/stream running there.
              </p>
            </div>
          </a>


          <a href='#'  className="list-group-item">
            <div style={{ display: 'inline-block', verticalAlign: 'top', margin: '0.4em 0px' }} className="login-icon">
              <span aria-hidden="true" className="glyphicon glyphicon-home"></span>
            </div>
            <h3 style={{ color: '#5cb85c' }} className="list-group-item-heading login-title login-section">
            <span className='me-2'><PiStudentBold size={70} /></span> <span></span>Students
            </h3>
            <div style={{ display: 'inline-block', width: '90%' }}>
              <p className="list-group-item-text p-text fs-6 ms-4 ">
              Students who are
                admitted in colleges affiliated to APJ Abdul Kalam Technological
                University can click here to login to the e-Gov application.
                Registered students can use the student portal to gain access to
                personalized information and also view their academic details,
                attendance and marks, earned credits etc. They can download
                their mark list, grade sheet etc and access educational
                information. The portal also allows students to securely
                communicate with the university.
              </p>
            </div>
          </a>

          {/* University Section */}
          <a href='#'  className="list-group-item" >
            <div style={{ display: 'inline-block', verticalAlign: 'top', margin: '0.4em 0px' }} className="login-icon">
              <span aria-hidden="true" className="glyphicon glyphicon-home"></span>
            </div>
            <h3 style={{ color: '#ffcc00' }} className="list-group-item-heading login-title login-section">
            <span className='me-2'><FaUniversity size={70} /></span> University
            </h3>
            <div style={{ display: 'inline-block', width: '90%' }}>
              <p className="list-group-item-text p-text fs-6 ms-4 ">
              University staff such
                as management team, auditors, external trainers and other
                officials can login to the e-Gov application to perform various
                activities. Master data such as programs, schemes,
                branches/streams, courses, academic calendar etc can be set up
                by the administrators. Clusters can be set up, cluster members
                configured and curriculum managed for each cluster. University
                academic experts can prepare the Curriculum, Course Plan and
                Evaluation Plan for the various programs offered and set the
                rules for course selection by colleges. The management team can
                also issue orders, view payment information and respond to
                communication with colleges.
              </p>
            </div>
          </a>

        </div>
      </div>

      <div className="col-sm-3  " style={{ marginTop: '40px' }} >
            <div >
            <h3 className=' p-3 text-white  rounded-top' style={{ margin: '0' ,backgroundColor:'#428bca'}}>Sign In </h3>
            </div>
     
        <form className="p-4 p-md-5 border  bg-body-tertiary rounded-bottom border border-primary">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" autoComplete='false'/>
            <label for="floatingInput">Enter Username</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" autoComplete='false'/>
            <label for="floatingPassword">Enter Password</label>
          </div>
          <button className="w-100 btn btn-lg text-white " type="submit" style={{backgroundColor:'#5cb85c'}}>Login</button>

        </form>
      </div>
  
    </div>


    </div>
  )
}

export default HomeBody