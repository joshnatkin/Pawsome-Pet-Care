import "../css/Home.css";
import shop from "../images/Home/shopping-cart.png";
import find from "../images/Home/search-img.png";
import supplies from "../images/Home/add-friends.png";
import parallaxHome1 from "../images/Home/parallax-home-1.jpg";
import parallaxHome2 from "../images/Home/parallax-home-2.jpg";


const Home = () => {
    return (
        <>
            <div className="parallax home"  style={{ backgroundImage: `url(${parallaxHome1})` }}>
                <h1 id="welcome">Welcome to Pawsome Pet Care</h1>
                <h3 id="start">Your adventure starts here!</h3>
            </div>

            <div className="middle">
                <div id="middle-info">
                    <h1>Find Your Pet In A Click</h1>
                    <hr />
                    <a href="adopt.html">
                        <button id="but">Adopt a pet</button>
                    </a>
                    <p>
                        Adopting a pet is a rewarding and straightforward process that brings joy and companionship to countless households. Many shelters and rescue organizations provide guidance and support to help match you with the perfect pet. The steps are simple: visit a shelter, meet the pets, and complete an adoption application. Some shelters offer virtual meet-and-greets, making it easier than ever to adopt from the comfort of your home. Adopting not only saves lives but also opens your heart to a new friend who will bring unconditional love and happiness into your life.
                    </p>
                    <br />
                    <p>
                        Use the resources here to find not only what you want in a pet, but also where to find pet shelters to get your first fluffy friend!
                    </p>
                </div>
                <section id="supa-nav">
                    <section id="adopt" className="circle-link">
                        <img className="home-img" src={shop} alt="Shopping Cart" />
                        <br />
                        <a href="adopt.html">Adopt a Pet</a>
                    </section>
                    <section id="friends" className="circle-link">
                        <img className="home-img" src={find} alt="Search" />
                        <br />
                        <a href="adopt.html">Find Shelters</a>
                    </section>
                    <section id="pet-groups" className="circle-link">
                        <img className="home-img" src={supplies} alt="Add Friends" />
                        <br />
                        <a href="join-pet-group.html">Pet supplies</a>
                    </section>
                </section>
            </div>

            <div className="parallax home2" style={{ backgroundImage: `url(${parallaxHome2})` }} >
                <h1 id="welcome">Bringing People Together with Pets</h1>
            </div>

            <div id="bottom-content">
                <div id="group-2side">
                    <div id="side1" className="column">
                        <p>
                            At Pawsome Pet Care, we believe in the power of pets to bring joy, companionship, and love into people's lives. Our mission is to connect pet lovers with animals in need of a home, fostering lifelong bonds that benefit both people and pets. Whether you're looking to adopt, join a pet group, or simply learn more about how you can help, we're here to guide you every step of the way. Together, we can create a community that celebrates the special relationship between humans and their furry friends.
                        </p>
                        <p>
                            Joining an online dog group offers a range of benefits for both dog owners and enthusiasts. It provides a supportive community where members can share advice, tips, and experiences about dog care, training, and behavior. Being part of such a group allows you to connect with like-minded individuals who understand the challenges and joys of pet ownership, offering solutions to common issues or new ideas to enhance your dog's well-being. Online dog groups also serve as a platform for discovering local dog-related events, adoption opportunities, and recommended products. Additionally, these groups can foster a sense of camaraderie and belonging, helping to build friendships and providing a space for celebrating the love of dogs.
                        </p>
                    </div>
                    <div id="side2" className="column">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/B-FGbGolYJ8?si=-ewpL2o7L_AWtbPy&amp;start=6"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
