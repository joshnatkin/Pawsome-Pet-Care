import React from 'react';
import "../css/About.css";
import Facecard from "../images/About/my-face.png";
import ContactForm from "../components/contactForm.js"; 

const About = () => {
    return (
        <div id="about-content">
            <h3>About Me</h3>
            <hr />
            <div className="about-container">
                <div id="about-text">
                    <p>
                        As a new pet owner, I quickly discovered how overwhelming it can be to find reliable information...
                    </p>
                    <br />
                    <p>
                        That's when the idea for Pawsome Pet Care came to life...
                    </p>
                </div>
                <div id="face">
                    <img id="face-img" src={Facecard} alt="My face" />
                </div>
            </div>

            <div id="reviews-contact">
                <div id="reviews">
                    <h2>Reviews from Users</h2>
                    <hr />
                    <p>
                        "Since I have started using Pawsome Pet Care, I have learned so much useful information about my poodle..."
                    </p>
                </div>

                {/* Use the ContactForm component here */}
                <ContactForm />
            </div>

            <div id="contact">
                <section>
                    <h4>Email:</h4>
                    <p>Pawsomepets@gmail.com</p>
                </section>
                <section>
                    <h4>Instagram:</h4>
                    <p>@PawsomePetCare</p>
                </section>
                <section>
                    <h4>Facebook:</h4>
                    <p>@PawsomePetCare</p>
                </section>
                <section>
                    <h4>Support Number:</h4>
                    <p>770-422-2222</p>
                </section>
            </div>
        </div>
    );
};

export default About;
