import React, { useState } from 'react';
// import '../styles/visitpopup.css';

const VisitPopup = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
    // You can add logic here to send the form data to your server or perform other actions
    // For this example, we're just logging the form data to the console
    onClose();
  };

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Request a Site Visit</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <button type="submit">Request Visit</button>
        </form>
      </div>
    </div>
  );
};

export default VisitPopup;
