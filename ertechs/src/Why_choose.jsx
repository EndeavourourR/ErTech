import React from 'react'
import whyimg from './assets/Whychoseus.png'
const Why_choose = () => {
    return (
        <>
            <h1 className='text-warning text-center fw-bolder'><u>Why Er.Tech's ?</u></h1>
            <div className='Whychooseus mx-auto w-75 d-flex align-items-center justify-content-center'>
                <img src={whyimg} className='d-flex align-items-center justify-content-center' />
                <div className='main ' style={{ marginTop: "10px" }} >
                    <p className='mx-auto  text-start fw-bold d fs-5'>
                        At Er.Tech's, we believe that our clients' success is our success.
                        That's why we are committed to providing exceptional
                        service and customized solutions that meet the unique needs of each business we work with. We take a collaborative
                        approach to every project, working closely with our clients to understand their goals and challenges. Our team of
                        experts has the experience, knowledge, and creativity to deliver innovative marketing solutions that drive results. When
                        you choose Er.Tech's, you can be confident that you have a partner who is dedicated to your success.</p>
                    <hr />
                    <div className='m-auto'>
                        <h5 className='text-start text-warning '>Personalized Business Package</h5>
                        <p className='text-start fw-bold fs-5'>
                            Choose from a wide range of web solutions that you need to ensure effective, efficient, and sustainable growth of your
                            business. Er.Tech's works on the smallest to largest detail of your website from mobile and speed optimization, to
                            landing page designs, and even SEO basically, everything under the digital sun!
                        </p><hr />
                        <h5 className='text-start text-warning '>Customized Approach</h5>
                        <p className='text-start fw-bold fs-5'>
                            Clients from around the globe have raved and benefited from our responsive WordPress and Commerce websites. These
                            SMEs are able to stand-up and even surpass bigger and heavier competition at a lower cost here at Er.Tech's all
                            because our services are tailored and uniquely-made for you and your specific vision for your company.
                        </p><hr />
                        <h5 className='text-start text-warning '>Results-Driven Solutions</h5>
                        <p className='text-start fw-bold fs-5'>
                            At Er.Tech's, we are committed to delivering measurable results for our clients. We leverage the latest technologies and
                            marketing tools to create data-driven campaigns that are optimized for performance and ROI. Our team is constantly
                            monitoring and analyzing campaign performance, making adjustments as needed.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Why_choose
