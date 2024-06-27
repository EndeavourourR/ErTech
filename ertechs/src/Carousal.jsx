import React from 'react'
import Slideimage from './assets/Backgroundimg1.jpg'

const Carousal = () => {
    return (
        <div className='main m-auto mt-5 w-75'>
            <h1 className='text-warning text-center fw-bolder ' style={{ marginTop: "100px" }}>Best Place for Creative Digital Solutions</h1>
            <p className='text-white text-center fw-bold fs-4'>Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with
                Stunning Website Designs.
            </p>
            <hr className='text-white fw-bold' />
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Slideimage} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className='fw-bold' style={{ fontSize: "100px" }}>Website Development</p>
                            <p className='fw-bold fs-3'>Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with Stunning Website Designs..</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Slideimage} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className='fw-bold' style={{ fontSize: "100px" }}>App Development</p>
                            <p className='fw-bold fs-3'>A Complete solution for designing and developing of any Apps .<br />
                                “Innovate, Create, Connect: Empowering the Digital World through
                                App Development.”
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Slideimage} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className='fw-bold' style={{ fontSize: "100px" }}>Website Maintainance</p>
                            <p className='fw-bold fs-3'>Keeping Your Website Running Smoothly and Securely.”Reliable website maintenance services ensuring optimal performance, security, and up-to-date content for your online presence”</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousal
