import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sportheader">
      <div className="mainheader">
        <div className="whiteheader">
          <div className="mainheader-flex">
            <div className="mainheader-left">
              <div className="SA-logo">
                <a href="https://sportsacademy.somaiya.edu/en">
                  <div>
                    <img
                      src="https://sportsacademy.somaiya.edu/assets/sportsacademy/img/common/sportacademylogo-color-svg.svg"
                      alt="Somaiya sportacademylogo"
                      className="w-100"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="mainheader-right">
              <div className="toplinks">
                <nav>
                  <ul>
                    <li className="leftline">
                      <a
                        className="darkf12firamd text-uppercase"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Student open in new Tab"
                      >
                        Student
                      </a>
                    </li>
                    <li>
                      <a
                        className="darkf12firamd text-uppercase"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Faculty open in new Tab"
                      >
                        Coach
                      </a>
                    </li>
                    <li>
                      <a
                        className="darkf12firamd text-uppercase"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Staff open in new Tab"
                      >
                        Admin
                      </a>
                    </li>
                    <li className="leftline">
                      {/* <a
                        className="darkf12firamd text-uppercase"
                        href="https://giving.somaiya.edu/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Give open in new Tab"
                      >
                        Give
                      </a> */}
                    </li>
                    <li>
                      <a
                        className="darkf12firamd text-uppercase"
                        href="https://www.somaiya.edu/en/career/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Career open in new Tab"
                      >
                        Career
                      </a>
                    </li>
                    <li>
                      <a
                        className="darkf12firamd text-uppercase"
                        href="https://www.somaiya.edu/en/emergency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Emergency open in new Tab"
                      >
                        Emergency
                      </a>
                    </li>
                    <li>
                      <a
                        className="darkf12firamd text-uppercase"
                        href="https://sportsacademy.somaiya.edu/en/faq"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="FAQs open in new Tab"
                      >
                        FAQs
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className="headermenuToggleBtn headermenutoggleHandler"
                onClick={toggleMenu}
              >
                <p className="menutext">Menu</p>
                <div className="hamberger">
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`redheader ${isOpen ? "open" : ""}`}>
          <div className="redheader-inner">
            <div className="redheader-flex">
              <div className="redheader-left">
                <div className={`mainmenu ${isOpen ? "open" : ""}`}>
                  <nav className="mainnav">
                    <ul>
                      <li className="sa-menu sa-enu-acc">
                        <a href="#" className="mobile-headertogglelink">
                          Sports
                        </a>
                        <div className="samenu-dropdown sa-enu-acc-body">
                          <div className="samenu-dropdown-inner">
                            <div className="samenulist">
                              <ul>
                                <li>
                                  <a href="https://sportsacademy.somaiya.edu/en/sports-a-to-z?verticaltablinklevel1=tabname1">
                                    <span className="darkf16firarg">
                                      A - Z Listing
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://sportsacademy.somaiya.edu/en/sports-a-to-z?verticaltablinklevel1=tabname2">
                                    <span className="darkf16firarg">
                                      Sports Marks Detail
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="https://sportsacademy.somaiya.edu/en/coaching">
                          Coaching
                        </a>
                      </li>
                      <li>
                      <Link to="/facilities"  >
                        Facilities
                      </Link>
                      </li>
                      <li className="sa-megamenu sa-enu-acc">
                        <a href="#" className="mobile-headertogglelink">
                          Admissions
                        </a>
                        <div className="samegamenu-dropdown sa-enu-acc-body admission-samegamenu-dropdown">
                          <div className="megamenu-dropdown-inner">
                            <div className="megamenu-dropdown-collist row m-0">
                              <div className="col-lg-3 col-md-6 academics-col">
                                <div className="mm-col" id="admisson">
                                  <h4 className="darkf18firamd mmsubheading">
                                    Admission
                                  </h4>
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <span className="admisson">
                                          Admission Process
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span className="darkf16firarg">
                                          Important Instructions
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span className="darkf16firarg">
                                          Documents Required
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span className="darkf16firarg">
                                          Fees Structure
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        target="_blank"
                                        href="#"
                                      >
                                        <span className="darkf16firarg">
                                          Admission Brochure
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="sa-menu sa-enu-acc">
                        <a href="#" className="mobile-headertogglelink">
                          Events & Updates
                        </a>
                        <div className="samenu-dropdown sa-enu-acc-body">
                          <div className="samenu-dropdown-inner">
                            <div className="samenulist">
                              <ul>
                                <li>
                                  <a href="#">
                                    <span className="darkf16firarg">
                                      Events
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    download=""
                                    href="https://sports-academy.s3.ap-south-1.amazonaws.com/Academics/SSA+SPORT+EVENT+CALENDAR+23-24.xlsx"
                                  >
                                    <span className="darkf16firarg">
                                      Events Calendar
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://sportsacademy.somaiya.edu/en/news-media/announcement/">
                                    <span className="darkf16firarg">
                                      Announcements
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://sportsacademy.somaiya.edu/en/news-media/media-coverage/">
                                    <span className="darkf16firarg">
                                      Media Coverage
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://sportsacademy.somaiya.edu/en/events-and-updates/gallery/">
                                    <span className="darkf16firarg">
                                      Gallery
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://sportsacademy.somaiya.edu/en/events-and-updates/video-listing/">
                                    <span className="darkf16firarg">
                                      Videos
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="darkf16firarg">Blogs</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="sa-megamenu sa-enu-acc">
                        <a href="#" className="mobile-headertogglelink">
                          About Us
                        </a>
                        <div className="samegamenu-dropdown sa-enu-acc-body aboutus-samegamenu-dropdown">
                          <div className="megamenu-dropdown-inner">
                            <div className="megamenu-dropdown-collist row m-0">
                              <div className="col-lg-3 aboutus-imgcol">
                                <img
                                  src="#"
                                  className="thumb w-100"
                                  alt="aboutmenu"
                                />
                              </div>
                              <div className="col-lg-9 aboutus-mainmenucol">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="mm-col">
                                      <ul>
                                        <li>
                                          <a href="#">
                                            <span className="darkf16firarg">
                                              About Ars
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span className="darkf16firarg">
                                              Our Team
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <span className="darkf16firarg">
                                              Our Vision
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="redheader-right">
                <div className="mainmenu-btns">
                  <div className="mmbtn yellow-mmbtn mmbtn-dropdown">
                    <a href="#" className="mmbtnlink mmbtn-ddclick">
                      <span className="lightf16firamd">Get In Touch</span>
                      <span className="caret"></span>
                    </a>
                    <div className="mmbtn-ddlist">
                      <ul>
                        <li>
                          <a href="#">
                            <span className="darkf16firamd">Contact Us</span>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="darkf16firamd">
                              Maps & Direction
                            </span>
                          </a>
                          <a href="#">
                            <span className="darkf16firamd">FAQ's</span>
                          </a>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#largeModal"
                          >
                            <span className="darkf16firamd">Enquire Now</span>
                          </a>
                          <a href="#">
                            <span className="darkf16firamd">
                              Faculty Directory
                            </span>
                          </a>
                          <a href="#">
                            <span className="darkf16firamd">
                              Contact Directory
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mmbtn blue-mmbtn">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mmbtnlink"
                    >
                      <span className="lightf16firamd">Come & Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;