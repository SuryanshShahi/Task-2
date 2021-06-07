import React, { useState } from "react";
import Details from "./Data/Details";
import web from "./images/plus.png";
import web1 from "./images/profile.png";
import web2 from "./images/profile1.png";
import web3 from "./images/profile2.png";
import web4 from "./images/profile3.png";
function Home() {
  const [details] = useState(Details);

  return (
    <section className="section bg-black w-100">
      <div className="container-fluid w-100 h-100 pt-1 B">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 text-white">
            <div className="container mt-5">
              <div className="mb-5 card ml-3 bordercard col-2 pt-2 bg-white text-dark justify-content-center d-flex align-items-center">
                <h2 className="font-weight-bold text-black">B</h2>
              </div>

              <div className="row sidecard py-4">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                  <div className="fa fa-user-circle fa-3x px-3"></div>
                  <h6 className="font-weight-bold mt-2">
                    Anand Agrawal
                    <br></br>
                    <span className="font-weight-normal">ananda0bk.com</span>
                  </h6>
                </div>
              </div>
              <div className="container">
                <h5 className="font-weight-bold mt-2">Motivation</h5>
                <ul className="list-unstyled pt-3">
                  <li>
                    Productivity{" "}
                    <div className="btn float-right btn-danger text-white">
                      New Record
                    </div>
                  </li>
                  <li className="pt-4">Design</li>
                  <li className="pt-4">Study</li>
                </ul>
              </div>
              <div className="container justify-content-center d-flex mt-3">
                <div className="card cardback border-0 shadow-lg fa-2x mt-4 py-3 w-75 pr-1">
                  <li className="list-unstyled">
                    <div className="fa fa-rocket text-danger fa-lg d-flex pl-4">
                      <h6 className="pl-4 text-white">
                        Pro account is more powerful. Get 30% off<br></br>
                        <div className="btn btn-primary border-0 mt-3 px-3">
                          Create
                        </div>
                      </h6>
                    </div>
                  </li>
                </div>
              </div>
              <div className="container mt-4 ">
                <div className="float-left fa fa-sign-out logout mt-5 ml-4 font-weight-bold">
                  &nbsp;<span>Logout</span>
                </div>
                <div className="text-white card float-right cardback1 col-sm justify-content-end d-flex mt-4">
                  <div className="fa fa-plus fa-lg px-3 py-3 text-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12 mt-lg-0 mt-md-0 mt-3">
            <div className="container-fluid A py-3 pb-4 my-3">
              <div className="container py-2">
                <div className="text-white float-right col-sm justify-content-end d-flex">
                  <img
                    src={web}
                    className="text-danger logout d-flex w-75 img-fluid mb-2"
                  ></img>
</div>
                  <div className="text-white float-lg-right float-sm-right float-md-left mt-lg-1 mb-2">
                    <img
                      src={web2}
                      className="text-danger profile fa-circle fa img-fluid"
                    ></img>
                    <img
                      src={web1}
                      className="text-danger profile fa-circle fa img-fluid"
                    ></img>
                    <img
                      src={web4}
                      className="text-danger profile fa-circle fa img-fluid"
                    ></img>
                    <img
                      src={web3}
                      className="text-danger profile fa-circle fa img-fluid"
                    ></img>
                 
                </div>
                <h1 className="text-white font-weight-bold">Motivation</h1>

                <ul className="nav nav-tabs">
                  <li className="active">
                    <a
                      className="active mx-3 font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
                      type="button"
                      data-toggle="tab"
                      href="#all"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className="mx-3 font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
                      type="button"
                      data-toggle="tab"
                      href="#action"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="mx-3 font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
                      type="button"
                      data-toggle="tab"
                      href="#podcast"
                    >
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      className="mx-3 font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
                      type="button"
                      data-toggle="tab"
                      href="#video"
                    >
                      Video
                    </a>
                  </li>
                  <li>
                    <a
                      className="mx-3 font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
                      type="button"
                      data-toggle="tab"
                      href="#download"
                    >
                      Downloads
                    </a>
                  </li>
                  <li>
                    <div className="btn btn-danger text-white mx-4">
                      Play All
                    </div>
                  </li>
                </ul>

                {details.map((elem) => {
                  const {
                    id,
                    name,
                    image,
                    image1,
                    image2,
                    image3,
                    image4,
                    image5,
                    tag,
                    tag1,
                    tag2,
                    tag3,
                    status,
                  } = elem;
                  return (
                    <div className="tab-content mt-4">
                      <div id="all" className="active tab-pane">
                        <div className="row container">
                          <div className="col-lg-5 col-12">
                            <div className="text-white py-3">
                              <div className="D card tile1">
                                <div className="row">
                                  <div className=" justify-content-center d-flex align-items-center">
                                    <div className="text-white font-weight-bold pt-lg-4 px-2 mb-4">
                                      {tag}
                                    </div>
                                    <div className="play">
                                      <div className="fa fa-play px-3 text-center font-weight-bold"></div>
                                    </div>
                                  </div>
                                  <div className="">
                                    <img
                                      src={image}
                                      className="h-100 img-fluid"
                                    ></img>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-white py-3">
                              <img
                                src={image4}
                                className="tile1 img-fluid"
                              ></img>
                            </div>
                          </div>
                          <div className="col-lg-7 col-12">
                            <div className="row tile1">
                              <div className="col-6 justify-content-center d-flex">
                                <div className="back w-100 my-3 card text-white py-3">
                                  <div className="font-weight-bold pt-1 px-3 fsize">
                                    {tag1}
                                  </div>
                                  <div className="play2 mt-lg-5 pt-lg-5 px-lg-4 px-3">
                                    <div className="fa fa-play px-3 text-center font-weight-bold"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 ">
                                <div className="D card my-3 text-white">
                                  <div className="zindex1 font-weight-bold pt-3 px-3">
                                    {tag2}
                                  </div>
                                  <img
                                    src={image1}
                                    className="img-fluid position-relative gx-0 tile"
                                  ></img>
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="text-white py-3">
                                  <div className="D card bg-dark">
                                    <div className="row">
                                      <div className="col-6">
                                        <img
                                          src={image3}
                                          className="img-fluid  tile"
                                        ></img>
                                      </div>
                                      <div className="col-6 px-lg-5 pt-2">
                                        <h2 className="font-weight-bolder pt-3">
                                          {tag3}
                                        </h2>

                                        <div className="btn btn-primary justify-content-center d-flex w-75 border-0 mt-2">
                                          Read Answers
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="text-success py-3">
                                  <img
                                    src={image5}
                                    className="img-fluid tile3 w-100"
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="action" className="tab-pane fade">
                        <div className="container bg-gray">
                          <div className="text-success py-4">
                            <img src={image} className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                      <div id="podcast" className="tab-pane fade">
                        <div className="container bg-gray">
                          <div className="text-success py-4">
                            <img src={image} className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                      <div id="video" className="tab-pane fade">
                        <div className="container bg-gray">
                          <div className="text-success py-4">
                            <img src={image} className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                      <div id="download" className="tab-pane fade">
                        <div className="container bg-gray">
                          <div className="text-success py-4">
                            <img src={image4} className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
