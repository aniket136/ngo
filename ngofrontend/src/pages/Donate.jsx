import React, { useState } from "react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("General");

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Redirect or process donation (here we open a dummy link)
    const donationURL = `https://your-donation-link.com?amount=${amount}&purpose=${purpose}`;
    window.open(donationURL, "_blank");
  };

  const presetAmounts = [100, 250, 500, 1000, 5000];

  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2 className="fw-bold">Make a Difference Today</h2>
          <p className="text-muted">
            Your donation helps us bring change. Select an amount or enter your own.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Preset Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                className={`btn btn-outline-primary px-4 py-2 ${
                  selectedAmount === String(amt) ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedAmount(String(amt));
                  setCustomAmount("");
                }}
              >
                ₹{amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-4">
            <input
              type="number"
              className="form-control form-control-lg text-center"
              placeholder="Or enter custom amount (₹)"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount("");
              }}
              min="1"
            />
          </div>

          {/* Purpose */}
          <div className="mb-4">
            <select
              className="form-select form-select-lg text-center"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="General">Use Where Needed</option>
              <option value="Education">Support Education</option>
              <option value="Healthcare">Healthcare Aid</option>
              <option value="Food">Food & Essentials</option>
            </select>
          </div>

          {/* Donate Button */}
          <div className="d-grid">
            <button className="btn btn-success btn-lg" onClick={handleDonate}>
              Donate ₹{selectedAmount || customAmount || "0"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
