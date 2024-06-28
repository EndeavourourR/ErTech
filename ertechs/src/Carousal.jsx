import React from 'react'
import Webmaintanance from './assets/Webmaintanance.jpg'
import Appdevelopment from './assets/Appdevelopment.jpg'
import Webdevelopment from './assets/Webdevelopment.jpg'
import CaseStudy from './CaseStudy'
import Service_solution from './Service_solution'
const Carousal = () => {
    return (
    <>
        <div className='main m-auto my-5 w-75  d-flex align-items-center justify-content-center'>
            <div className='content rounded mx-auto col-6 p-3'>
                <h3 className='text-warning text-center fw-bolder '>Best Place for Creative Digital Solutions</h3>
                <p className='text-white text-strat fw-bold fs-6'>Discover the best place for creative digital solutions at ER.Tech's.
                    We specialize in crafting innovative and impactful digital strategies that elevate brands and engage audiences.
                    Whether you're looking to launch a stunning website, develop a user-friendly mobile app, or enhance your digital presence through bespoke solutions, our team is dedicated to delivering excellence.
                    With a focus on creativity, usability, and technological expertise, we ensure your digital initiatives not only meet but exceed expectations.
                    Partner with us to transform your vision into reality and embark on a journey of digital success. Whatever your goals may be, trust ER.Tech's as your ultimate destination for cutting-edge digital solutions.
                </p>
            </div>
            <hr className='text-white fw-bold' />
            <div id="carouselExampleInterval" class="carousel-fade mx-auto" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={Webdevelopment} className="d-block w-100" />
                        <div className="carousel-caption d-md-block">
                            <p className='fw-bold text-warning' style={{ fontSize: "2.5rem" }}>Website Development</p>
                            <p className='fs-5'>Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with Stunning Website Designs..</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Appdevelopment} className="d-block w-100" />
                        <div className="carousel-caption d-md-block">
                            <p className='fw-bold text-warning' style={{ fontSize: "2.5rem" }}>App Development</p>
                            <p className='fs-5'>A Complete solution for designing and developing of any Apps .<br />
                                “Innovate, Create, Connect: Empowering the Digital World through
                                App Development.”
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Webmaintanance} className="d-block w-100" />
                        <div className="carousel-caption d-md-block">
                            <p className='fw-bold text-warning' style={{ fontSize: "2.5rem" }}>Website Maintainance</p>
                            <p className='fs-5'>Keeping Your Website Running Smoothly and Securely.”Reliable website maintenance services ensuring optimal performance, security, and up-to-date content for your online presence”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr /> <hr />
        <CaseStudy />
        <hr /><hr />
        <Service_solution />
    </>
    )
}

export default Carousal
