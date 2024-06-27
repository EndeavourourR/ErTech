import React from 'react'
import AboutImg from './assets/AboutImg.png'
import Whoimg from './assets/Whoweare.png'

const Who_we_are = () => {
    return (
        <>
            <div className="about d-flex align-items-center justify-content-center">
                <div className='main m-auto w-75' >
                    <h1 className=' text-center ' style={{fontSize: "50px" }}>About Us</h1>
                    <p className='mx-auto text-center fw-bold p-3 fs-5 '>
                        <span className='text-warning fw-bolder'>Welcome to ER Technology,</span> <br /> where innovation meets efficiency in the dynamic world of Information Technology.
                        Established with a vision to redefine technological solutions, ER Technology stands at the forefront of delivering cutting-edge IT services tailored to meet the diverse needs of modern businesses.
                    </p>
                    <img src={Whoimg} className='Col-6 m-auto d-flex align-items-center justify-content-center' />
                    <hr />
                    <p className='mx-auto text-center fw-bold p-3 fs-5 '>
                        Er.Tech's is a unified communications platform that empowers business owners and promotes business growth through
                        services that strengthen brand identity, and sustainably promote online presence to increase engagement. We offer
                        services to help small business enterprises from branding, website development, to digital marketing—and everything else
                        digital in between.

                        No need to waste time and money on different agencies that inclusively focus on various aspects of your business because
                        at Er.Tech's, we’ve got everything you need—and so much more.

                        Er.Tech's houses professionals who will closely work with you as you effectively, efficiently, and sustainably race
                        towards achieving your company’s growth, at a reasonable cost for your budding venture. So it’s worry-free, hassle-free,
                        and affordable!
                    </p>
                </div>
            </div>
            <hr />
            <div className=' m-auto w-75'>
                <h1 className=' text-warning text-center fw-bolder' ><u>Who we are?</u></h1>
                <div className='whoweare d-flex align-items-center justify-content-center'>
                    <div>
                        <img className='m-auto d-flex align-items-center justify-content-center' src={AboutImg} />
                    </div>
                    <div>
                        <p className=' text-center fw-bold fs-5 '>
                            ER Technology is a pioneering force in the realm of Information Technology, dedicated to shaping the future of
                            digital
                            innovation. Founded on a passion for technology and a commitment to excellence, we have emerged as a trusted partner
                            for
                            businesses seeking to navigate the complexities of the digital landscape.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Who_we_are
