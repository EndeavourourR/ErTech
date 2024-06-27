import React from 'react'
import contactimg from './assets/Contactus.png'
const Contact = () => {
  return (
    <>
      <h1 className=' text-center ' id='contact' style={{ fontSize: "50px" }}>Contact Us</h1>
      <div className='contact m-auto w-auto my-5 py-5 d-flex align-items-center justify-content-center gap-5'>
        <img className='' src={contactimg} alt="" />
        <form className=''>
          <div class="mb-3">
            <label for="Name" class="form-label">Name</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="Emial" class="form-label">Email</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="Message" class="form-label">Message</label>
            <textarea type="password" class="form-control" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" class="btn btn-warning fw-bold">Submit</button>
        </form>
      </div>
      <hr />
    </>
  )
}

export default Contact
