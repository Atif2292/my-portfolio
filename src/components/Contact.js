import React from 'react'
import TopNav from './TopNav';

const Contact = () => {
  return (
    <>
    <TopNav />
    <div className="container my-3 py-3">
    
      <h2 className="comman-heading">contact me</h2>
      
      

      <hr />
      
      <div className="container">
      <label for="Email">username</label>
    <div className="contact-form">
      <form action="https://formspree.io/f/mdoqeybb" method="POST" className="contact-inputs">
        <input type="text"
          placeholder="username"
          name="username"
          required
          autoComplete="off"
          
        />
            <div class="form my-3">
              <label for="Name">Name</label>
              <input
                // type="email"
                class="form-control"
                id="Name"
                placeholder="Enter your name"
              />
            </div>
            <div class="form my-3">
              <label for="Email">Email</label>
              <input
                type="email"
                class="form-control"
                id="Email"
                placeholder="name@example.com"
              />
            </div>
            <div class="form  my-3">
              <label for="Password">Message</label>
              <textarea
                rows={5}
                class="form-control"
                id="Password"
                placeholder="Enter your message"
              />
            </div>
            <div className="text-center">
              <button
                class="my-2 px-4 mx-auto btn btn-dark"
                type="submit"

              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <TopNav/>
  </>
  );
}

export default Contact