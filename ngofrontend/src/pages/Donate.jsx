import React, { useState } from "react";
import axios from "axios";
import "./Donate.css"; // optional for custom styles

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("General");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleDonate = async () => {
    const amount = selectedAmount || customAmount;

    if (!name || !email || !amount || isNaN(amount) || amount <= 0) {
      alert("Please fill all fields with valid data.");
      return;
    }

    try {
      const res = await axios.post("https://ngo-e9k0.onrender.com/api/donations", {
        name,
        email,
        amount,
        purpose,
        method: paymentMethod,
      });

      alert("Thank you for your donation!");

      // Clear form
      setName("");
      setEmail("");
      setSelectedAmount("");
      setCustomAmount("");
      setPurpose("General");
      setPaymentMethod("UPI");
    } catch (err) {
      console.error(err);
      alert("Failed to process donation. Please try again later.");
    }
  };

  const presetAmounts = [100, 250, 500, 1000, 5000];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-gradient">💛 Support Our Mission</h2>
        <p className="text-muted fs-5">Make a real difference with your donation.</p>
      </div>

      <div className="row g-4 shadow-lg p-4 rounded bg-white">
        {/* Payment Methods */}
        <div className="col-md-4 border-end ">
          <h5 className="fw-bold mb-4 text-center">Choose Payment Method</h5>

          {[
            { label: "UPI", icon: "bi-phone", note: "Google Pay, PhonePe, Paytm" },
            { label: "Debit/Credit Card", icon: "bi-credit-card-2-front", note: "Visa, MasterCard, Rupay" },
          ].map((method) => (
            <div
              key={method.label}
              className={`payment-card card p-3 mb-3 ${paymentMethod === method.label ? "selected" : ""}`}
              onClick={() => setPaymentMethod(method.label)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-3">
                <i className={`bi ${method.icon} fs-2 text-primary`}></i>
                <div>
                  <h6 className="mb-0">{method.label}</h6>
                  <small className="text-muted">{method.note}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Donation Form */}
        <div className="col-md-8">
          <h5 className="fw-bold mb-4">Your Details</h5>

          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Donation Amount</label>
            <div className="d-flex flex-wrap gap-2 mb-2">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  className={`amount-btn btn btn-outline-primary rounded-pill px-4 py-2 ${selectedAmount === String(amt) ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedAmount(String(amt));
                    setCustomAmount("");
                  }}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Or enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount("");
              }}
              min="1"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Donation Purpose</label>
            <select
              className="form-select form-select-lg"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="General">Use Where Needed</option>
              <option value="Education">Support Education</option>
              <option value="Healthcare">Healthcare Aid</option>
              <option value="Food">Food & Essentials</option>
            </select>
          </div>

          <div className="d-grid">
            <button className="btn btn-lg donate-btn text-white" style={{ backgroundColor: "#28a745" }} onClick={handleDonate}>
              Donate ₹{selectedAmount || customAmount || "0"} Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
