import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";
import EditOverlay from "../../components/editoverlay/editoverlay";
import "./about.css";

function About() {
    const [formData, setFormData] = useState([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/contact");
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/contact/${id}`);
            setFormData((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting item", error);
        }
    };

    const handleEdit = (item) => {
        setSelectedUser(item);
        setShowOverlay(true);
    };

    return (
        <>
            <div className="about-header">
                <h1>Your Details</h1>
            </div>
            <div className="about-container">
                <div className="about-card">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Message</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.message}</td>
                                    <td>
                                        <button className="action-btn" onClick={() => handleEdit(item)}>
                                            <MdEdit size={20} />
                                        </button>
                                    </td>
                                    <td>
                                        <button className="action-btn" onClick={() => handleDelete(item.id)}>
                                            <MdDelete size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <EditOverlay 
                isOpen={showOverlay}
                onClose={() => setShowOverlay(false)}
                user={selectedUser}
                onUserUpdated={(updatedUser) => {
                    setFormData((prev) =>
                        prev.map((item) => (item.id === updatedUser.id ? updatedUser : item))
                    );
                }}
            />
        </>
    );
}

export default About;
