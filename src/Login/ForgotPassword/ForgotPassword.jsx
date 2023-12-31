import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
const ForgotPassword=()=>{
    const design =(
        <>
        {/* start: body area */}
        <div className="wrapper">
          {/* start: page body */}
          <div className="page-body auth px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                  <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    <img
                      alt="Login V2"
                      className="img-fluid"
                      src="assets/images/dashboard/forgot-password-v2.svg"
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <div
                    className="card shadow-sm w-100 p-4 p-md-5"
                    style={{ maxWidth: "32rem" }}
                  >
                    {/* Form */}
                    <ForgotPasswordForm/>
                    {/* End Form */}
                  </div>
                </div>
              </div>{" "}
              {/* End Row */}
            </div>
          </div>
        </div>
        {/* Jquery Core Js */}
        {/* Jquery Page Js */}
      </>
      
    );
    return design;
}
export default ForgotPassword;