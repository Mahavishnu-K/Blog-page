import React from "react";
import { useState , useEffect} from "react";
import './contact.css';

function Contact() {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:4000/api/contact", formData);
            alert(response.data.message);
            setFormData({ name: "", email: "", phone: "", message: "" });
        }catch(err){
            console.error("Error submitting form", error);
            alert("Error submitting");
        }
        
    };

    return(
        <>
            <div className="contact-title">
                <h1>Contact us</h1>
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
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your Email"
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
                        placeholder="Enter Phone no"
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
                        placeholder="Enter any message"
                        required
                        className="input-field"
                    ></textarea>
                </div>

                <div className="submit">
                    <button type="submit" className="sub-button">
                        submit
                    </button>
                </div>
            </form>  
          </div>
        </>
    )
}

export default Contact;