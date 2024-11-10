import React, { useState } from 'react';

const API_KEY = "cd3a3602-5ea0-4fdf-b453-2e78c2c036c8"; // Your Web3Forms API key

const sendEmail = async (json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [resultMessage, setResultMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataWithApiKey = {
            ...formData,
            access_key: API_KEY, // Add the API key to the form data
        };
        const json = JSON.stringify(dataWithApiKey);
        setResultMessage("Sending...");

        const response = await sendEmail(json);

        if (response && response.status === 200) {
            setResultMessage("Email successfully sent");
        } else {
            setResultMessage("Sorry, your email wasn't sent");
        }
    };

    return (
        <div id="contact-me">
            <h2>Contact form</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="first-name">First Name:</label>
                    <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="last-name">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </p>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <p>
                    <button id="submit" type="submit">
                        Submit
                    </button>
                </p>
            </form>
            {resultMessage && (
                <p style={{ textAlign: 'center', color: resultMessage.includes("successfully") ? 'green' : 'red' }}>
                    {resultMessage}
                </p>
            )}
        </div>
    );
};

export default ContactForm;
