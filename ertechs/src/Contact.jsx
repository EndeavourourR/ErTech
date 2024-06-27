import React, { useState } from 'react';
import contactimg from './assets/Contactus.png'
const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    number: '',
    message: ''
  });
  const [msg, setMsg] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzzEr3mD3AqHQgkEe4ChSC6nrUYtm6vOKYIkFXZHGXlFgIC7qLw-wDbAhZm0_OWRIbcPw/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target)
    })
      .then(response => {
        setMsg('Message Sent successfully');
        setTimeout(() => {
          setMsg('');
        }, 2000);
        setFormData({
          Name: '',
          email: '',
          number: '',
          message: ''
        });
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <>
      <h1 className=' text-center ' id='contact' style={{ fontSize: "50px" }}>Contact Us</h1>

      <div className='contact m-auto col-5 my-5 py-5 d-flex align-items-center justify-content-center gap-*'>
        <img className='' src={contactimg} alt="" />
        <div className="containe col-6 m-auto w-75">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Your Name</label>
              <input type="text" className="form-control" id="name" name="Name" value={formData.Name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Your Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label fw-bold">Your Contact</label>
              <input type="tel" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-bold">Your Message</label>
              <textarea className="form-control" id="message" name="message" rows="6" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {msg && <div className="alert alert-success mt-3">{msg}</div>}
        </div>
      </div>
    </>
  );
};

export default Contact;



