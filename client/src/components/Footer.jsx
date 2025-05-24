import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
      <>
          <MDBFooter
              bgColor="light"
              className="text-center text-lg-start text-muted">
              <MDBContainer className="p-4 pb-0">
                  <section className="mb-4">
                      <MDBBtn
                          floating
                          className="m-1"
                          style={{ backgroundColor: "#3b5998" }}
                          href="#!"
                          role="button">
                          <MDBIcon fab icon="facebook-f" />
                      </MDBBtn>

                      <MDBBtn
                          floating
                          className="m-1"
                          style={{ backgroundColor: "#55acee" }}
                          href="#!"
                          role="button">
                          <MDBIcon fab icon="twitter" />
                      </MDBBtn>

                      <MDBBtn
                          floating
                          className="m-1"
                          style={{ backgroundColor: "#dd4b39" }}
                          href="#!"
                          role="button">
                          <MDBIcon fab icon="google" />
                      </MDBBtn>
                      <MDBBtn
                          floating
                          className="m-1"
                          style={{ backgroundColor: "#ac2bac" }}
                          href="#!"
                          role="button">
                          <MDBIcon fab icon="instagram" />
                      </MDBBtn>

                      <MDBBtn
                          floating
                          className="m-1"
                          style={{ backgroundColor: "#0082ca" }}
                          href="#!"
                          role="button">
                          <MDBIcon fab icon="linkedin-in" />
                      </MDBBtn>

                      <MDBBtn
                          floating
                          className="m-1"
                          style={{ backgroundColor: "#333333" }}
                          href="#!"
                          role="button">
                          <MDBIcon fab icon="github" />
                      </MDBBtn>
                  </section>
              </MDBContainer>
              <section className="">
                  <MDBContainer className="mt-5 text-center text-md-start">
                      <MDBRow className="mt-3">
                          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                              <h6 className="mb-4 text-uppercase fw-bold">
                                  <MDBIcon icon="gem" className="me-3" />
                                  FoodSnap
                              </h6>
                              <p>
                                  Here you can add blogs of different variety of receipes. We heartly welcome all the creators to our platform and let show the cooking talent. 
                              </p>
                          </MDBCol>

                          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                              <h6 className="mb-4 text-uppercase fw-bold">
                                  Blogs
                              </h6>
                              <p>
                                  <a href="#!" className="text-reset">
                                      Vegeterian
                                  </a>
                              </p>
                              <p>
                                  <a href="#!" className="text-reset">
                                      Non-Vegeterian
                                  </a>
                              </p>
                              <p>
                                  <a href="#!" className="text-reset">
                                      Cuisine
                                  </a>
                              </p>
                              <p>
                                  <a href="#!" className="text-reset">
                                      Dessert
                                  </a>
                              </p>
                          </MDBCol>

                          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                              <h6 className="mb-4 text-uppercase fw-bold">
                                  Useful links
                              </h6>
                              <p>
                                  <a href="#!" className="text-reset">
                                      Marketplace
                                  </a>
                              </p>
                              <p>
                                  <a href="#!" className="text-reset">
                                      Register
                                  </a>
                              </p>
                              <p>
                                  <a href="#!" className="text-reset">
                                      About Us
                                  </a>
                              </p>
                              <p>
                                  <a href="#!" className="text-reset">
                                      Privacy Policy
                                  </a>
                              </p>
                          </MDBCol>

                          <MDBCol
                              md="4"
                              lg="3"
                              xl="3"
                              className="mx-auto mb-4 mb-md-0">
                              <h6 className="mb-4 text-uppercase fw-bold">
                                  Contact
                              </h6>
                              <p>
                                  <MDBIcon icon="home" className="me-2" />
                                  38/1, Chandaka Industrial Estate, Near Infocity, Bhubaneswar, Odisha, 751024, India                            </p>
                              <p>
                                  <MDBIcon icon="envelope" className="me-3" />
                                  mail@srustiacademy.ac.in
                              </p>
                              <p>
                                  <MDBIcon icon="phone" className="me-3" /> 
                                  9439015757 / 7749813707
                                  
                              </p>
                              
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
              </section>
              <div
                  className="p-4 text-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                  © 2024 Copyright:
                  <a
                      className="text-reset fw-bold"
                      href="https://mdbootstrap.com/">
                      FoodSnap.com
                  </a>
              </div>
          </MDBFooter>
      </>
  );
}

export default Footer