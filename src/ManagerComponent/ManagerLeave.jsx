import React from "react";
import ManagerSideBar from "../Component/SideBar/ManagerSideBar";
import ManagerHeader from "../Component/Headers/ManagerHeader";
import Footer from "../Component/Footer/Footer";
const ManagerLeave=()=>{
    const design =(<>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <title>:: HRIS :: Leaves</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Favicon*/}
        {/* plugin css file  */}
        <link rel="stylesheet" href="assets/css/daterangepicker.min.css" />
        <link rel="stylesheet" href="assets/css/dataTables.min.css" />
        {/* project css file  */}
        <link rel="stylesheet" href="assets/css/luno.style.min.css" />
        <link rel="stylesheet" href="assets/css/custom.css" />
        {/* start: sidebar */}
        <div>
          <ManagerSideBar/>
          </div>
        {/* start: body area */}
        <div className="wrapper" style={{ overflowY: "scroll" }}>
          {/* start: page header */}
          <header className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
            <div className="container-fluid">
              <nav className="navbar">
                {/* start: toggle btn */}
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-link d-none d-xl-block sidebar-mini-btn p-0 text-primary"
                  >
                    <span className="hamburger-icon">
                      <span className="line" />
                      <span className="line" />
                      <span className="line" />
                    </span>
                  </button>
                  <a
                    href="#"
                    className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary"
                  />
                  <button
                    type="button"
                    className="btn btn-link d-block d-xl-none menu-toggle p-0 text-primary"
                  >
                    <span className="hamburger-icon">
                      <span className="line" />
                      <span className="line" />
                      <span className="line" />
                    </span>
                  </button>
                  <a
                    href="#"
                    className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary"
                  >
                    <img
                      src="assets/images/logo/logo.png"
                      alt="Mynd"
                      style={{ height: 40 }}
                    />
                  </a>
                </div>
                <div className="header-left flex-grow-1 d-none d-md-block">
                  <div className="main-search px-3 flex-fill">
                    <input
                      className="form-control cntrl"
                      type="text"
                      placeholder="Search employee"
                    />
                    <div className="card shadow rounded-4 search-result slidedown">
                      <div className="card-body">
                        <small className="text-uppercase text-muted">
                          Recent searches
                        </small>
                        <div className="d-flex flex-wrap align-items-start mt-2 mb-4">
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-primary text-white"
                            href="#"
                          >
                            Shefali Jain
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-secondary text-white"
                            href="#"
                          >
                            Raunak Sharma
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-info text-white"
                            href="#"
                          >
                            Rohit Kumar
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-dark text-white"
                            href="#"
                          >
                            Kevin Gill
                          </a>
                          <a
                            className="small rounded py-1 px-2 m-1 fw-normal bg-danger text-white"
                            href="#"
                          >
                            Shubham Gill
                          </a>
                        </div>
                        <small className="text-uppercase text-muted">
                          Suggestions
                        </small>
                        <div className="card list-group list-group-flush list-group-custom mt-2">
                          <a
                            className="list-group-item list-group-item-action text-truncate"
                            href="#"
                          >
                            <div className="fw-bold">Mark Anthony</div>
                            <small className="text-muted">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry.
                            </small>
                          </a>
                          <a
                            className="list-group-item list-group-item-action text-truncate"
                            href="#"
                          >
                            <div className="fw-bold">Sakshi Gaur</div>
                            <small className="text-muted">
                              There are many variations of passages of Lorem Ipsum
                              available
                            </small>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* start: search area */}
                <div>
                  <ManagerHeader/>
                  </div>
                {/* </div> */}
              </nav>
            </div>
          </header>
          {/* start: page toolbar */}
          <div className="page-toolbar px-xl-4 px-sm-2 px-0 pt-3">
            <div className="container-fluid">
              <div className="row mb-3 align-items-center">
                <div className="col">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                      <a className="text-secondary" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Leaves
                    </li>
                  </ol>
                </div>
              </div>{" "}
              {/* .row end */}
            </div>
          </div>
          {/* start: page body */}
          <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2">
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="social_activity"
                      role="tabpanel"
                    >
                      <div className="d-flex justify-content-between">
                        <h4>Status</h4>
                      </div>
                      <div className="mb-4">
                        <div>
                          <div className="col-12">
                            <div className="media-body m-0 mt-2 mt-md-0 text-md-start">
                              <div className="row g-2 mb-4 row-deck">
                                <div className="col-lg-3 col-sm-3 card py-2 px-3 me-2 mt-2">
                                  <div className="card border-0 alert-success alert mb-0">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar rounded-circle no-thumbnail bg-success text-light">
                                        <i className="fa fa-check fa-lg" />
                                      </div>
                                      <div className="flex-fill ms-3 text-truncate">
                                        <div className="h6 mb-0">Approved</div>
                                        <span className="big text-success h4">9</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-3 card py-2 px-3 me-2 mt-2">
                                  <div className="card border-0 alert-success alert mb-0">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar rounded-circle no-thumbnail bg-danger text-light">
                                        <i className="fa fa-times fa-lg" />
                                      </div>
                                      <div className="flex-fill ms-3 text-truncate">
                                        <div className="h6 mb-0">Rejected</div>
                                        <span className="big text-danger h4">10</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-3 card py-2 px-3 me-2 mt-2">
                                  <div className="card border-0 alert-success alert mb-0">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar rounded-circle no-thumbnail bg-warning text-light">
                                        <i className="fa fa-hourglass-half fa-lg" />
                                      </div>
                                      <div className="flex-fill ms-3 text-truncate">
                                        <div className="h6 mb-0">Pending</div>
                                        <span className="big text-warning h4">6</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="card mt-2">
                          <div className="card-header">
                            <h4 className="card-title m-0">Leave requests</h4>
                            <div className="dropdown morphing scale-left">
                              <a
                                href="#"
                                className="card-fullscreen"
                                data-bs-toggle="tooltip"
                                title="Card Full-Screen"
                              >
                                <i className="icon-size-fullscreen" />
                              </a>
                              <a
                                href="#"
                                className="more-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-h" />
                              </a>
                            </div>
                          </div>
                          <div className="card-body col-lg-12 row rmargin">
                            <div className="col-lg-1 py-1">
                              <h6 className="pt-2">Filters</h6>
                            </div>
                            <div className="col-lg-2 col-md-6 py-1">
                              <div className="">
                                <input
                                  className="form-control borad"
                                  type="text"
                                  placeholder="Search by name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-6 py-1">
                              <select className="form-select borad">
                                <option selected="">Type</option>
                                <option>Earned Leave</option>
                                <option>Casual Leave</option>
                                <option>Sick Leave</option>
                                <option>Restricted Holiday</option>
                                <option>Compensatory-Off</option>
                                <option>Paternity Leave</option>
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12  py-1">
                              <div
                                className=" border rounded ypad"
                                id="reportrange"
                                style={{
                                  background: "#fff",
                                  cursor: "pointer",
                                  padding: "5px 10px",
                                  border: "1px solid #ccc",
                                  width: "100%"
                                }}
                              >
                                <i className="fa fa-calendar" />
                                &nbsp;<span>March 8, 2022 - April 6, 2022</span>{" "}
                                <i className="fa fa-caret-down" />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-9 py-1">
                              <button className="btn btn-custom mx-2">Apply</button>
                              <a href="#">Cancel</a>
                            </div>
                            <div className="col-lg-1 col-md-4 py-1" id="buttons">
                              <button
                                type="submit"
                                className="btn bg-transparent border-primary text-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#proceed_req"
                                data-bs-placement="top"
                              >
                                Proceed
                              </button>
                            </div>
                          </div>
                          <div className="card-body">
                            <table
                              id="contact_list"
                              className="table align-middle mb-0 card-table myDataTable"
                            >
                              <thead>
                                <tr>
                                  <th style={{ width: 20 }}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        onclick="hideButton()"
                                        id="tableCheckbox"
                                      />
                                    </div>
                                  </th>
                                  <th>Name</th>
                                  <th>Type</th>
                                  <th>From</th>
                                  <th>To</th>
                                  <th>
                                    Count<small className="text-muted">(Days)</small>
                                  </th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        onclick="hideButton()"
                                        id="tableCheckbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="assets/images/xs/avatar1.jpg"
                                        className="rounded-circle avatar"
                                        alt=""
                                      />
                                      <a
                                        href="#modify_request_ro"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#modify_request_ro"
                                        data-bs-placement="top"
                                      >
                                        <div className="ms-2">
                                          <div className="mb-0">Shubham Gill</div>
                                          <span className="text-muted">
                                            Web Designer
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="mb-0">Sick Leave</div>
                                    </div>
                                  </td>
                                  <td>23 Feb 2022</td>
                                  <td>25 Feb 2022</td>
                                  <td>2.5</td>
                                  <td>
                                    <span className="badge bg-danger">Rejected</span>
                                  </td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        onclick="hideButton()"
                                        id="tableCheckbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="assets/images/xs/avatar2.jpg"
                                        className="rounded-circle avatar"
                                        alt=""
                                      />
                                      <a
                                        href="#modify_request_ro"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#modify_request_ro"
                                        data-bs-placement="top"
                                      >
                                        <div className="ms-2">
                                          <div className="mb-0">Rohit Kumar</div>
                                          <span className="text-muted">
                                            Full stack developer
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="mb-0">Earned Leave</div>
                                    </div>
                                  </td>
                                  <td>15 Jan 2022</td>
                                  <td>16 Jan 2022</td>
                                  <td>1</td>
                                  <td>
                                    <span className="badge bg-success">Approved</span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm color-400"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#"
                                      data-bs-placement="top"
                                      title="Cancel request"
                                    >
                                      <i className="fa fa-times" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        onclick="hideButton()"
                                        id="tableCheckbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="assets/images/xs/avatar3.jpg"
                                        className="rounded-circle avatar"
                                        alt=""
                                      />
                                      <a
                                        href="#modify_request"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#modify_request"
                                        data-bs-placement="top"
                                      >
                                        <div className="ms-2">
                                          <div className="mb-0">Raunak Sharma</div>
                                          <span className="text-muted">Tester</span>
                                        </div>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="mb-0">Sick Leave</div>
                                    </div>
                                  </td>
                                  <td> 05 Jan 2022</td>
                                  <td> 06 Jan 2022</td>
                                  <td>1.5</td>
                                  <td>
                                    <span className="badge bg-warning">Pending</span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm color-400"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#modify_request"
                                      data-bs-placement="top"
                                      title="Modify"
                                    >
                                      <i className="fa fa-pencil" />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm color-400"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#"
                                      data-bs-placement="top"
                                      title="Cancel request"
                                    >
                                      <i className="fa fa-times" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="assets/images/xs/avatar4.jpg"
                                        className="rounded-circle avatar"
                                        alt=""
                                      />
                                      <a
                                        href="#modify_request_ro"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#modify_request_ro"
                                        data-bs-placement="top"
                                      >
                                        <div className="ms-2">
                                          <div className="mb-0">Kevin Gill</div>
                                          <span className="text-muted">
                                            Web Designer
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="mb-0">Sick Leave</div>
                                    </div>
                                  </td>
                                  <td>23 Feb 2022</td>
                                  <td>24 Feb 2022</td>
                                  <td>1</td>
                                  <td>
                                    <span className="badge bg-danger">Rejected</span>
                                  </td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        onclick="hideButton()"
                                        id="tableCheckbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="assets/images/xs/avatar5.jpg"
                                        className="rounded-circle avatar"
                                        alt=""
                                      />
                                      <a
                                        href="#modify_request"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#modify_request"
                                        data-bs-placement="top"
                                      >
                                        <div className="ms-2">
                                          <div className="mb-0">Robin Verma</div>
                                          <span className="text-muted">
                                            .NET developer
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="mb-0">Earned Leave</div>
                                    </div>
                                  </td>
                                  <td>15 Jan 2022</td>
                                  <td>18 Jan 2022</td>
                                  <td>4</td>
                                  <td>
                                    <span className="badge bg-success">Approved</span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm color-400"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#"
                                      data-bs-placement="top"
                                      title="Cancel request"
                                    >
                                      <i className="fa fa-times" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        onclick="hideButton()"
                                        id="tableCheckbox"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="assets/images/xs/avatar6.jpg"
                                        className="rounded-circle avatar"
                                        alt=""
                                      />
                                      <a
                                        href="#modify_request"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#modify_request"
                                        data-bs-placement="top"
                                      >
                                        <div className="ms-2">
                                          <div className="mb-0">Shefali Jain</div>
                                          <span className="text-muted">
                                            Web Designer
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="mb-0">Restricted Holidays</div>
                                    </div>
                                  </td>
                                  <td>05 Jan 2022</td>
                                  <td>07 Jan 2022</td>
                                  <td>3</td>
                                  <td>
                                    <span className="badge bg-warning">Pending</span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm color-400"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#modify_request"
                                      data-bs-placement="top"
                                      title="Modify"
                                    >
                                      <i className="fa fa-pencil" />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-sm color-400"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#"
                                      data-bs-placement="top"
                                      title="Cancel request"
                                    >
                                      <i className="fa fa-times" />
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* offcanvas: Modify Leave Request */}
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex={-1}
                      id="modify_request"
                    >
                      <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Employee leave request</h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-header">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar3.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">Raunak Sharma</div>
                            <span className="text-muted">Tester</span>
                          </div>
                        </div>
                      </div>
                      <div className="offcanvas-body">
                        <form className="row g-3">
                          <div className="col-md-8">
                            <label className="form-label">Type</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Sick leave"
                              readOnly=""
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Balance</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder={2.0}
                              readOnly=""
                            />
                          </div>
                          <div className="col-8">
                            <label className="form-label">From</label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="05 Jan 2022"
                              readOnly=""
                            />
                          </div>
                          <div className="col-4 mt-custom">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gridCheck"
                              readOnly=""
                            />
                            <label className="form-check-label" htmlFor="gridCheck">
                              Second Half
                            </label>
                          </div>
                          <div className="col-8">
                            <label className="form-label">To</label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="06 Jan 2022"
                              readOnly=""
                            />
                          </div>
                          <div className="col-4 mt-custom">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gridCheck"
                              readOnly=""
                            />
                            <label className="form-check-label" htmlFor="gridCheck">
                              First Half
                            </label>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Count</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="1.5"
                              readOnly=""
                            />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label">Contact Number</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder={+911234567890}
                              readOnly=""
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Reason</label>
                            <textarea
                              className="form-control"
                              placeholder="Symptoms of cold found."
                              style={{ height: 100 }}
                              readOnly=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="form-label">Attachment</label>
                            <div className="card">
                              <button
                                type="button"
                                className="btn btn-link btn-sm color-400"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Download file"
                              >
                                Medical Reports
                                <i className="px-3 fa fa-download" />
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Manager Remarks</label>
                            <textarea
                              className="form-control"
                              placeholder="Request has been updated."
                              style={{ height: 100 }}
                              defaultValue={""}
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn bg-success text-light"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              className="btn bg-danger text-light"
                              data-bs-dismiss="offcanvas"
                            >
                              Reject
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* offcanvas: Modify Leave Request Rejected */}
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex={-1}
                      id="modify_request_ro"
                    >
                      <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Employee leave request</h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-header">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/xs/avatar3.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <div className="ms-2">
                            <div className="mb-0">Raunak Sharma</div>
                            <span className="text-muted">Tester</span>
                          </div>
                        </div>
                      </div>
                      <div className="offcanvas-body">
                        <form className="row g-3">
                          <div className="col-md-8">
                            <label className="form-label">Type</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Sick leave"
                              readOnly=""
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Balance</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder={2.0}
                              readOnly=""
                            />
                          </div>
                          <div className="col-8">
                            <label className="form-label">From</label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="05 Jan 2022"
                              readOnly=""
                            />
                          </div>
                          <div className="col-4 mt-custom">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gridCheck"
                              readOnly=""
                            />
                            <label className="form-check-label" htmlFor="gridCheck">
                              Second Half
                            </label>
                          </div>
                          <div className="col-8">
                            <label className="form-label">To</label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="06 Jan 2022"
                              readOnly=""
                            />
                          </div>
                          <div className="col-4 mt-custom">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gridCheck"
                              readOnly=""
                            />
                            <label className="form-check-label" htmlFor="gridCheck">
                              First Half
                            </label>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Count</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="1.5"
                              readOnly=""
                            />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label">Contact Number</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder={+911234567890}
                              readOnly=""
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Reason</label>
                            <textarea
                              className="form-control"
                              placeholder="Symptoms of cold found."
                              style={{ height: 100 }}
                              readOnly=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="form-label">Attachment</label>
                            <div className="card">
                              <button
                                type="button"
                                className="btn btn-link btn-sm color-400"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Download file"
                              >
                                Medical Reports
                                <i className="px-3 fa fa-download" />
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Manager Remarks</label>
                            <textarea
                              className="form-control"
                              placeholder="Request has been updated."
                              style={{ height: 100 }}
                              readOnly=""
                              defaultValue={""}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* offcanvas: Proceed Request */}
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex={-1}
                      id="proceed_req"
                    >
                      <div className="offcanvas-header">
                        <h5 className="offcanvas-title" />
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body">
                        <form className="row g-3">
                          <div className="col-12 text-center">
                            <span className="pt-2 h4">
                              You've selected all items.
                            </span>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Manager Remarks</label>
                            <textarea
                              className="form-control"
                              placeholder="State your reason..."
                              style={{ height: 100 }}
                              defaultValue={""}
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn bg-success text-light"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              className="btn bg-danger text-light"
                              data-bs-dismiss="offcanvas"
                            >
                              Reject
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* offcanvas: change password */}
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="change_pass">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Change password</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label className="form-label">Old Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="***********"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="***********"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="***********"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#pass_otp"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="offcanvas"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* offcanvas: change password - OTP popup */}
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="pass_otp">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">2-step Verification</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <span className="text-muted">
                    We sent a verification code to your phone number. Enter the code
                    in the field below.
                  </span>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center"
                      placeholder="-"
                      maxLength={1}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center"
                      placeholder="-"
                      maxLength={1}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center"
                      placeholder="-"
                      maxLength={1}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="offcanvas"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="offcanvas"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* start: page footer */}
          <div>
            <Footer/>
            </div>
        </div>
        {/* Jquery Core Js */}
        {/* Plugin Js */}
        {/* Jquery Page Js */}
      </>
      );
return design;
}
export default ManagerLeave;
