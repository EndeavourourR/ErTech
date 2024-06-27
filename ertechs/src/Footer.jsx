import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='m-auto w-100 rounded my-4  text-center text-black fw-bold bg-warning-subtle'>
            <p className='fs-5'>
                <Link to="/contact  " className='text-decoration-none text-danger  '>Er.Technologies</Link>
                <br />
                Copyright © 2024 ER Technologies. All rights reserved."
            </p>
        </div>
    )
}

export default Footer
