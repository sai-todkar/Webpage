import axios from "axios";
import React, { useState } from "react";
import "../styles/agent.css";
import agents from "../utils/agent.json";

const Agents = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    selectedAgent: "",
    feedback: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.customerName || !formData.mobile || !formData.selectedAgent) {
      setSubmissionStatus("error");
      return;
    }

    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3000/realstate/create",
        {
          realstatename: formData.customerName,
          mobilenumber: formData.mobile,
          selectedDesigner:formData.selectedAgent,
          designVision: formData.feedback,
        }
      );
      console.log(response.data);
      setSubmissionStatus("success");
      setFormData({
        customerName: "",
        mobile: "",
        selectedAgent: "",
        feedback: "",
      });
    } catch (error) {
      
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <section className="residences">
      <div className="ag-container">
        <h2 className="section-title">Our Expert Designers</h2>

        <div className="agents-grid">
          {agents.map((agent, index) => (
            <div className="agent-card" key={index}>
              <div className="card-image">
                <img src={agent.img} alt={agent.name} />
                <div className="agent-specialty">{agent.specialty}</div>
              </div>
              <div className="card-content">
                <h3>{agent.name}</h3>
                <p className="experience">
                  {agent.experience} years experience
                </p>
                <p className="description">{agent.description}</p>
                <div className="ratings">
                  ⭐ {agent.rating} ({agent.reviews} reviews)
                </div>
              </div>
              <button className="know-more-btn">View Portfolio</button>
            </div>
          ))}
        </div>

        <div className="design-form">
          <h2 className="form-title">Personalized Design Consultation</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  required
                />
              </div>

              <div className="form-group">
                <label>Select Designer</label>
                <select
                  name="selectedAgent"
                  value={formData.selectedAgent}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose your designer</option>
                  {agents.map((agent) => (
                    <option key={agent.id} value={agent.name}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label>Your Design Vision</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Describe your dream space, preferred styles, and any specific requirements..."
                />
              </div>
            </div>

            {submissionStatus === "success" && (
              <div className="success-message">
                🎉 Request submitted successfully!
              </div>
            )}
            {submissionStatus === "error" && (
              <div className="error-message">
                ⚠️ Please fill all required fields
              </div>
            )}

            <button type="submit" className="submit-btn">
              Schedule Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Agents;
