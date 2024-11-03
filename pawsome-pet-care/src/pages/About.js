import "../css/About.css";
import Facecard from "../images/About/my-face.png"

const About = () => {
    return (
        <div id="about-content">
            <h3>About Me</h3>
            <hr />
            <div className="about-container">
                <div id="about-text">
                    <p>
                        As a new pet owner, I quickly discovered how overwhelming it can be to find reliable information. Whether it was researching the best care tips for my new furry friend or looking for adoption resources, there was no single place that offered everything I needed. I often found myself browsing countless websites, feeling lost in a sea of advice.
                    </p>
                    <br />
                    <p>
                        That's when the idea for Pawsome Pet Care came to life. I wanted to create a space for people like me—whether you're a first-time pet owner or someone looking to adopt—where you can easily find the information you need. But more than that, I envisioned a place where pet lovers could connect, share experiences, and build a community. Here, you can find care tips, adoption resources, and even meet others with similar pet interests. My goal is to make your pet journey a little easier, and a lot more fun!
                    </p>
                </div>
                <div id="face">
                <img id="face-img" src={Facecard} alt="My face"/>
                </div>
            </div>

            <div id="reviews-contact">
                {/* Reviews Section */}
                <div id="reviews">
                    <h2>Reviews from Users</h2>
                    <hr />
                    <p>
                        "Since I have started using Pawsome Pet Care, I have learned so much useful information about my poodle that I otherwise would have had to pay for. If you are a new pet owner, this is the perfect site to learn how to take care of your animal."
                    </p>
                    <p>
                        "Since I joined a group for Persian Cat breeds, I have been able to help my cat enjoy activities I never knew about. We even had a Persian cat meet-up. Definitely recommend using this website."
                    </p>
                    <p>
                        "I was very lost on what breed to look for in my adopting process, but this website showed me exactly what I needed to find the perfect dog breed. Would not have been able to find my perfect Retriever without y'all."
                    </p>
                </div>

                <div id="contact-me">
                    <h2>Contact form</h2>
                    <form>
                        <p>
                            <label htmlFor="first-name">First Name:</label>
                            <input type="text" id="first-name" name="first-name" required />
                        </p>
                        <p>
                            <label htmlFor="last-name">Last Name:</label>
                            <input type="text" id="last-name" name="last-name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" name="email" required />
                        </p>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <p>
                            <button id="submit" type="submit">Submit</button>
                        </p>
                    </form>
                </div>
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
