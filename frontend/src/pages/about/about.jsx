import React from "react";
import { useState , useEffect } from "react";
import './about.css'

function About() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    useEffect(() => {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    return(
        <>
        <div className="about-header">
            <h1>Your Details</h1>
        </div>
            <div className="about-container">
                <div about="about-card">
                    <p>Name - {formData.name}</p>
                    <p>E mail - {formData.email}</p>
                    <p>Phone no. - {formData.phone}</p>
                    <p>Message - {formData.message}</p>
                </div>
            </div>
        </>
    )
}

export default About;