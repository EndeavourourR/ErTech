import React from 'react'
import serviceimg from './assets/Services.png'
import solutionimg from './assets/Solutions.png'
const Service_solution = () => {
    return (
        <>
            <h1 className=' text-center ' style={{ fontSize: "50px" }}>Services & Solutions</h1>

            <div className=' Servive_solution m-auto w-75 d-flex align-items-center justify-content-center gap-3 '>
                <div class="card mx-3 p-3 bg-dark text-white d-flex align-items-center justify-content-center" >
                    <img src={serviceimg} class="card-img-top" style={{ width: "255px" }} />
                    <div class="card-body">
                        <h3 class="card-title fw-bold text-center text-warning">Er.Tech's Software Products and Services</h3>
                        <p class="card-text fw-bold" style={{ fontSize: "13px" }}>
                            Er.Tech's offer products that are highly efficient and compatible with industry standards. The Software products offered are examined and tested by professionally certified technicians.
                            Er.Tech's excels in Services like Web Development, Digital Marketing, Customized Software Development, App Development, Augmented Reality, Magneto Development, and e-commerce app development.
                            Also, the Software Services provided are about 10% cost-effective than the prevailing market prices. Hence, Er.Tech's delivers cost-effective and highly analyzed qualitatively Software products.
                        </p>
                    </div>
                </div>
                <div class="card mx-3 p-3 bg-dark text-white d-flex align-items-center justify-content-center" >
                    <img src={solutionimg} class="card-img-top" style={{ width: "400px" }} />
                    <div class="card-body">
                        <h3 class="card-title fw-bold text-center text-warning">Er.Tech's Customer Problem-Solving Process</h3>
                        <p class="card-text fw-bold" style={{ fontSize: "13px" }}>
                            Er.Tech's have designed a problem-solving mechanism that helps understand the customers’ problems and resolve them in no time.
                            Er.Tech's excels in Software Services like Web Development, Digital Marketing, Customized Software Development, Application Development, Augmented Reality, Magneto Development, and e-commerce app development.
                            Er.Tech's has created an innovative ecosystem for customers’ problem-solving. Er.Tech's take their customer’s problems on the highest priority and settle them in a reasonable time.
                        </p>
                    </div>
                </div>
            </div>
            <hr /><hr />
        </>
    )
}

export default Service_solution
