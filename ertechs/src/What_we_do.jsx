import React from 'react'
import whatimg from './assets/Whatwedo.png'

const What_we_do = () => {
    return (
        <div>
            <h1 className="text-center text-warning fw-bolder "><u>What We Do ?</u></h1>
            <div className='whatwedo d-flex align-items-center justify-content-center m-auto w-75' style={{ marginTop: "10px" }} >
                <div className='what_cards my-4'>
                    <div >
                        <h5 className="text-warning text-end">Define Goals and Requirements .</h5>
                        <p className='fs-5 text-end fw-bold'>
                            At ER.Tech's, we Understand the purpose of the website, its target audience, and the specific goals it needs to achieve.
                        </p>
                    </div>
                    <hr />
                    <div >
                        <h5 className="text-warning text-end">Research and Planning .</h5>
                        <p className='fs-5 text-end fw-bold'>
                            Conduct market research to gather insights about the target audience, competitors, and industry trends.
                        </p>
                    </div>
                    <hr />
                    <div >
                        <h5 className="text-warning text-end">User Experience (UX) Design .</h5>
                        <p className='fs-5 text-end fw-bold'>
                            Design a user-friendly experience with wireframes or prototypes.
                        </p>
                    </div>
                    <hr />
                    <div >
                        <h5 className="text-warning text-end">Testing and Optimization .</h5>
                        <p className='fs-5 text-end fw-bold'>
                            Test rigorously to find and resolve issues like broken links, browser compatibility, or usability glitches.
                        </p>
                    </div>
                    <hr />
                    <div >
                        <h5 className="text-warning text-end">Launch and Deployment .</h5>
                        <p className='fs-5 text-end fw-bold'>
                            Host the website, set up domain and hosting securely, and keep an eye on performance.
                        </p>
                    </div>
                    <hr />
                    <div >
                        <h5 className="text-warning text-end">Maintenance and Updates .</h5>
                        <p className='fs-5 text-end fw-bold'>
                            Keep the website fresh with new content, enhance its features, and fix any tech glitches.
                        </p>
                    </div>
                    <hr />
                </div>
                <img src={whatimg} className=' m-auto d-flex align-items-center justify-content-center' />
                <hr />
            </div>
            <hr />
        </div>
    )
}

export default What_we_do
