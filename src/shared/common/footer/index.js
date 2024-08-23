import React from "react";
import "./footer.scss";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <MDBFooter
        // bgColor="black"
        className="text-center text-lg-start text-muted footer_main"
      >
        <div className="container">
          <div style={{ color: "white" }} className="footer_aligment">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me-5 d-none d-lg-block footer-text">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="google" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="linkedin" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="github" />
                </a>
              </div>
            </section>

            <section className="">
              <MDBContainer className="text-center text-md-start mt-5">
                <MDBRow className="mt-3">
                  <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Exclusive
                    </h6>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <input
                      style={{}}
                      className="mt-4"
                      type="email"
                      placeholder="Enter Your Email"
                      name=""
                      id=""
                    />
                  </MDBCol>

                  <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                    <p className="text-reset">
                      111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </p>
                    <p className="text-reset">exclusive@gmail.com</p>
                    <p className="text-reset">+88015-88888-9999</p>
                  </MDBCol>

                  <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Account</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        My Account
                      </a>
                    </p>
                    <p>
                      <Link to={`/login`} className="text-reset">
                        Login / Register
                      </Link>
                    </p>
                    <p>
                      <Link to={'/cart'} className="text-reset">
                        Cart
                      </Link>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Wishlist
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Quick Link</h6>
                    <p>
                      <MDBIcon icon="home" className="me-2" />
                      Privacy Policy
                    </p>
                    <p>
                      <MDBIcon icon="envelope" className="me-3" />
                      Terms Of Use
                    </p>
                    <p>
                      <MDBIcon icon="phone" className="me-3" /> FAQ
                    </p>
                    <p>
                      <MDBIcon icon="print" className="me-3" /> Contact
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              © 2024 Copyright:
              <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                Electrahub.com
              </a>
            </div>
          </div>
        </div>
      </MDBFooter>
    </div>
  );
}
