import React from 'react'

const CaseStudy = () => {
    return (
        <>
            <h1 className=' text-center ' style={{ fontSize: "50px" }}>Case Study</h1>
            <p className='text-center fs-4 '>Er.Tech's Case Studies will help to understand our Problem-solving methods and how Er.Tech's help customers by providing them better services.

            </p>
            <div className=' casestudy m-auto w-75 d-flex align-items-center justify-content-center gap-2'>
                <div class="card mx-3 bg-dark text-white" >
                    <div class="card-body" style={{ height: "12em" }}>
                        <h3 class="card-title fw-bold text-center text-warning">Analysis</h3>
                        <p class="card-text fw-bold" style={{ fontSize: "13px" }}>The Er.Tech's team collect reliable data from primary and authentic sources.
                            Er.Tech's data analyze by a 3-step module system so that Er.Tech's can justify their Software products and services.
                        </p>
                    </div>
                </div>
                <div class="card mx-3 bg-dark text-white" >
                    <div class="card-body" style={{ height: "12em" }}>
                        <h3 class="card-title fw-bold text-center text-warning">Design</h3>
                        <p class="card-text fw-bold" style={{ fontSize: "13px" }}>Er.Tech's approach pattern is designed to forge our software development products entirely incisive.
                            Er.Tech's designs are outrightly innovative that is affluent for our end users.
                        </p>
                    </div>
                </div>
                <div class="card mx-3 bg-dark text-white" >
                    <div class="card-body" style={{ height: "12em" }}>
                        <h3 class="card-title fw-bold text-center text-warning">Development</h3>
                        <p class="card-text fw-bold" style={{ fontSize: "13px" }}>Software implementation and development are thoroughly examined by the Er.Tech's team can accord an outstanding experience to our customers.
                        </p>
                    </div>
                </div>
                <div class="card mx-3 bg-dark text-white" >
                    <div class="card-body" style={{ height: "12em" }}>
                        <h3 class="card-title fw-bold text-center text-warning">Testing and Maintenance</h3>
                        <p class="card-text fw-bold" style={{ fontSize: "13px" }}>Testing is a stepping stone that can make Er.Tech's entire efforts viable.
                            Er.Tech's recursive and outsmart maintenance services help Er.Tech's to content our clients conclusively.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudy
