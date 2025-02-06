import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/contact", formData);
            alert("Form submitted successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" }); 
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Error submitting the form. Please try again.");
        }
    };

    return (
        <>
            <div className="contact-title">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone No.</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            required
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            required
                            className="input-field"
                        ></textarea>
                    </div>

                    <div className="submit">
                        <button type="submit" className="sub-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
