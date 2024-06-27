import React from 'react'

const Ourservices = () => {
  return (
    <>
      <div className='main mx-auto w-75' >
        <div className="container">
          <h1 className=' text-center my-5' style={{ fontSize: "50px" }}>Our Services</h1>
          <p className='text-white fs-4 fw-bold text-center'>Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.</p>
        </div>
        <hr className='text-white' />
        <div class="cards d-flex flex-column mx-2 rounded-5">
          <div className="sub_cards1 d-flex align-content-center justify-content-evenly">
            <div class="card content d-flex align-content-center justify-content-evenly flex-column  text-center rounded-5  ">
              <p class="tip fs-4 fw-bolder">Website development</p>
              <p class="second-text p-3 fs-4 fw-bold">Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with Stunning Website Designs.</p>
              <button className='fs-5 w-50 border border-warning text-white m-auto my-2  fw-bold rounded-3'>learn more</button>
            </div>
            <div class="card content d-flex align-content-center justify-content-evenly flex-column text-center rounded-5   ">
              <p class="tip fs-4 fw-bolder">App development</p>
              <p class="second-text p-3 fs-6 fw-bold">A Complete solution for designing and developing of any Apps .
                “Innovate, Create, Connect: Empowering the Digital World through
                App Development.”</p>
              <button className='fs-5 w-50 border border-warning text-white m-auto my-2  fw-bold rounded-3'>learn more</button>
            </div>
            <div class="card content d-flex align-content-center justify-content-evenly flex-column text-center rounded-5   ">
              <p class="tip fs-4 fw-bolder">Website maintainance</p>
              <p class="second-text p-3 fs-6 fw-bold">Keeping Your Website Running Smoothly and Securely.”Reliable website maintenance services ensuring optimal performance, security, and up-to-date content for your online presence”</p>
              <button className='fs-5 w-50 border border-warning text-white m-auto my-2  fw-bold rounded-3'>learn more</button>
            </div>
          </div>

          <div className="sub_cards2 d-flex align-content-center justify-content-evenly">
            <div class="card content d-flex align-content-center justify-content-evenly flex-column text-center rounded-5 ">
              <p class="tip fs-4 fw-bolder">Graphic Design</p>
              <p class="second-text p-3 fs-6 fw-bold">Ignite Your Brand with Exceptional Graphic Design Solutions!
                Craft Your Identity with Our Expert Graphic Design Services. Elevate Your Visual Storytelling with Striking Designs that Leave a Lasting Impression.</p>
              <button className='fs-5 w-50 border border-warning text-white m-auto my-2  fw-bold rounded-3'>learn more</button>
            </div>
            <div class="card content d-flex align-content-center justify-content-evenly flex-column text-center rounded-5 ">
              <p class="tip fs-4 fw-bolder">Domian Hoisting</p>
              <p class="second-text p-3 fs-6 fw-bold">Boost Your Online Presence with Reliable Domain Hosting Solutions!
                Secure Your Corner of the Internet with Our Professional Domain Hosting Services. Elevate Your Website's Performance with Dependable Hosting.</p>
              <button className='fs-5 w-50 border border-warning text-white m-auto my-2  fw-bold rounded-3'>learn more</button>
            </div>
            <div class="card content d-flex align-content-center justify-content-evenly flex-column text-center rounded-5 ">
              <p class="tip fs-4 fw-bolder">Digital Marketing</p>
              <p class="second-text p-3 fs-6 fw-bold">Supercharge Your Growth with Dynamic Digital Marketing Solutions!
                Unleash Your Online Potential with Our Expert Digital Marketing Services. Elevate Your Brand's Impact with Precision Targeting and Results-Driven Strategies.
              </p>
              <button className='fs-5 w-50 border border-warning text-white m-auto my-2  fw-bold rounded-3'>learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourservices
