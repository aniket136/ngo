import { useState } from "react";
import logo from "../assets/egologo.png"; // Update with correct path

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="text-dark pt-5 pb-4 footer">
      <div className="container-xl">
        <div className="row gy-5 align-items-start">

          {/* Column 1: Brand & Contact */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="EduChild Logo" width="50" className="me-2" />
              <h4 className="fw-bold m-0">EduChild</h4>
            </div>
            <p className="opacity-75">
              Spreading light through education, one child at a time.
            </p>
            <p className="opacity-75">📧 educhild@gmail.com</p>
          </div>

          {/* Column 2: What We Do */}
          <div className="col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">What We Do</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none d-block mb-2">Programs</a></li>
              <li><a href="#" className="text-dark text-decoration-none d-block mb-2">Success Stories</a></li>
              <li><a href="#" className="text-dark text-decoration-none d-block mb-2">Impact</a></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Get Involved</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none d-block mb-2">Volunteer</a></li>
              <li><a href="#" className="text-dark text-decoration-none d-block mb-2">Donate</a></li>
              <li><a href="#" className="text-dark text-decoration-none d-block mb-2">Partnerships</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Stay in Touch</h6>
            <p className="opacity-75">Get stories, impact updates, and volunteering news.</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <hr className="my-4 border-dark" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">© 2025 EduChild. All rights reserved.</p>
          <div>
            <a href="#" className="text-dark me-3 fs-5"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-dark me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-dark fs-5"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
