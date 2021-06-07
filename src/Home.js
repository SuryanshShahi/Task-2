import React, { useState } from "react";
import Details from "./Data/Details";
function Home() {
  const [details] = useState(Details);

  return (
    <section className="bg-black py-1 px-5 position-fixed w-100 h-100">
      <div className="container-fluid w-100 h-100 B">
        <div className="row">
          <div className="col-4 text-white">
            <div className="container mt-5">
              <div className="mb-5 card ml-3 bordercard col-2 pt-2 bg-white text-dark justify-content-center d-flex align-items-center">
                <h1>
                  <b>B</b>
                </h1>
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
                <h5 className="font-weight-bold mt-5">Motivation</h5>
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
              <div className="container justify-content-center d-flex mt-5">
                <div className="card cardback border-0 shadow-lg fa-2x mt-5 py-3 w-75 pr-1">
                  <li className="list-unstyled">
                    <div className="fa fa-rocket text-danger d-flex pl-4">
                      <h6 className="pl-4 text-white">
                        Pro account is more powerful. Get 30% off<br></br>
                        <div className="btn btn-primary bg-white text-danger font-weight-bold mt-3 px-3">
                          Create
                        </div>
                      </h6>
                    </div>
                  </li>
                </div>
              </div>
              <div className="container logout">
                <div className="float-left mt-5 ml-4 font-weight-bold">
                  Logout
                </div>
                <div className="text-white card cardback1 col-sm float-right mt-4">
                  <div className="fa fa-plus fa-lg px-3 py-3 text-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="container-fluid A py-3 my-3">
              <div className="container py-3">
                <h1 className="text-white font-weight-bold">Motivation</h1>
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a
                      className="active font-weight-bolder px-2 py-2 tab rounded-0 text-decoration-none"
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
                    <div className="tab-content mt-5">
                      <div id="all" className="active tab-pane fade in ">
                        <div className="row container">
                          <div className="col-5">
                            <div className="text-white py-3">
                              <div className="D card tile1">
                                <div className="row">
                                  <div className="col-5 justify-content-center d-flex align-items-center pl-5 pb-5 mb-5">
                                    <h4 className="text-white font-weight-bold">
                                      {tag}
                                    </h4>
                                    <div className="play">
                                      <div className="fa fa-play px-3 text-center font-weight-bold"></div>
                                    </div>
                                  </div>
                                  <div className="col-7">
                                    <img
                                      src={image}
                                      className="tile1 img-fluid"
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
                          <div className="col-7">
                            <div className="row">
                              <div className="col-6 justify-content-center d-flex">
                                <div className="back w-100 my-3 card text-white py-3">
                                  <h5 className="font-weight-bold pt-1 px-3">
                                    {tag1}
                                  </h5>
                                  <div className="play2 px-2">
                                    <div className="fa fa-play px-3 text-center font-weight-bold"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 ">
                                <div className="D card my-3 text-white">
                                  <h5 className="zindex1 font-weight-bold pt-3 px-3">
                                    {tag2}
                                  </h5>
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

                                        <div className="btn btn-primary bg-white text-dark font-weight-bold mt-2">
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
