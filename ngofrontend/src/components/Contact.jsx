import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/contact/detail", formData);
      if (response.status === 201) {
        setShowToast(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-xl my-5">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          {showToast && (
            <div className="alert alert-success text-center fw-medium" role="alert">
              Message sent successfully!
            </div>
          )}
          <div className="row g-0 shadow-lg rounded-4 overflow-hidden">
            <div className="col-md-7 p-5 bg-white">
              <h3 className="fw-bold mb-4">Send us a message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label fw-medium">Name *</label>
                    <input
                      type="text"
                      className={`form-control border-0 shadow-sm p-2 ${formErrors.name ? "is-invalid" : ""}`}
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label fw-medium">Email *</label>
                    <input
                      type="email"
                      className={`form-control border-0 shadow-sm p-2 ${formErrors.email ? "is-invalid" : ""}`}
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="phone" className="form-label fw-medium">Phone</label>
                    <input
                      type="tel"
                      className="form-control border-0 shadow-sm p-2"
                      id="phone"
                      name="phone"
                      placeholder="Phone #"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-medium">Message *</label>
                  <textarea
                    className={`form-control border-0 shadow-sm p-2 ${formErrors.message ? "is-invalid" : ""}`}
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2 fw-bold"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="col-md-5 p-5 text-white d-flex flex-column justify-content-center bg-dark">
              <h3 className="fw-bold mb-3">Contact Information</h3>
              <p className="mb-3">We'd love to hear from you! Reach out anytime.</p>
              <p><i className="bi bi-geo-alt-fill"></i> 9757 Aspen Lane, NY 11419</p>
              <p><i className="bi bi-telephone-fill"></i> +1 (291) 939 9321</p>
              <p><i className="bi bi-envelope-fill"></i> info@mywebsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
