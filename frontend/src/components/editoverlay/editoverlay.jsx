import React, { useState, useEffect } from "react";
import "./editoverlay.css";

function EditOverlay({ isOpen, onClose, user, onUserUpdated }) {
    const [editedUser, setEditedUser] = useState(user || {});

    useEffect(() => {
        setEditedUser(user || {});
    }, [user]);

    if (!isOpen || !user) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onUserUpdated(editedUser);
        onClose();
    };

    return (
        <div className="overlay">
            <div className="OverlayBackground" onClick={onClose}>
                <div className="OverlayContainer" onClick={(e) => e.stopPropagation()}>
                    <h2 className="edit-title">Edit User Details</h2>
                    <div className="input-group">
                        <label>Name:</label>
                        <input type="text" name="name" className="input" value={editedUser.name || ""} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Email:</label>
                        <input type="email" name="email" className="input" value={editedUser.email || ""} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Phone:</label>
                        <input type="text" name="phone" className="input" value={editedUser.phone || ""} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Message:</label>
                        <textarea name="message" className="input" value={editedUser.message || ""} onChange={handleChange}></textarea>
                    </div>
                    <div className="detail-buttons">
                        <button type="button" className="saveButton" onClick={handleSave}>
                            Save
                        </button>
                        <button type="button" className="closeButton" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOverlay;
