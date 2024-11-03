import React from 'react';
import "../css/Supplies.css";

const Supplies = () => {
    return (
        <div id="group-main-content">
            <div className="container">
                {/* Adjust image import as needed */}
                <img id="group1-img" src={require("../images/nine-dogs-in-grassy-field.jpg")} alt="Group of dogs in grassy field" />
            </div>
            <h2>Top 10 Best Supplies for your pets</h2>
            <div id="group">
                <div id="first-five">
                    <section id="dog-bed" className="supplies">
                        <div className="text-container">
                            <h3>Dog Bed</h3>
                            <p>A comfortable bed is essential for a dog's rest. Look for memory foam options or orthopedic beds for older dogs that provide extra joint support.</p>
                        </div>
                        <img src={require("../images/supplies/dog-bed.png")} alt="Dog Bed" />
                    </section>

                    <section id="dog-bowls" className="supplies">
                        <div className="text-container">
                            <h3>Food and Water Bowls</h3>
                            <p>Opt for stainless steel or ceramic bowls, which are durable and easy to clean. Elevated bowls can be beneficial for larger breeds to help with digestion.</p>
                        </div>
                        <img src={require("../images/supplies/dog-bowl.png")} alt="Food and Water Bowls" />
                    </section>

                    <section id="dog-food" className="supplies">
                        <div className="text-container">
                            <h3>Quality Dog Food</h3>
                            <p>A well-balanced, nutrient-rich dog food is crucial for your dog's health. Look for foods that suit your dog's age, breed, and health requirements.</p>
                        </div>
                        <img src={require("../images/supplies/dog-food.png")} alt="Quality Dog Food" />
                    </section>

                    <section id="dog-collar" className="supplies">
                        <div className="text-container">
                            <h3>Dog Collar and ID</h3>
                            <p>A sturdy, comfortable collar with an ID tag engraved with your contact information is essential for safety.</p>
                        </div>
                        <img src={require("../images/supplies/dog-collar.png")} alt="Dog Collar and ID" />
                    </section>

                    <section id="dog-leash" className="supplies">
                        <div className="text-container">
                            <h3>Leash</h3>
                            <p>Choose a durable leash that's comfortable for you to hold. Retractable leashes can provide more freedom, while standard leashes offer better control.</p>
                        </div>
                        <img src={require("../images/supplies/dog-leash.png")} alt="Leash" />
                    </section>
                </div>

                <div id="second-five">
                    <section id="dog-toys" className="supplies">
                        <div className="text-container">
                            <h3>Dog Toys</h3>
                            <p>Toys help keep dogs entertained, active, and mentally stimulated. Durable chew toys, puzzle toys, and balls are great for preventing boredom.</p>
                        </div>
                        <img src={require("../images/supplies/dog-toy.png")} alt="Dog Toys" />
                    </section>

                    <section id="grooming-tools" className="supplies">
                        <div className="text-container">
                            <h3>Grooming Tools</h3>
                            <p>A quality brush or comb is essential for keeping your dog's coat healthy. Depending on your dog’s breed, you may also need nail clippers, shampoo, and ear-cleaning supplies.</p>
                        </div>
                        <img src={require("../images/supplies/grooming-tools.png")} alt="Grooming Tools" />
                    </section>

                    <section id="dog-crate" className="supplies">
                        <div className="text-container">
                            <h3>Dog Crate</h3>
                            <p>Whether for training, traveling, or providing a safe space for your dog, a comfortable and well-ventilated crate or carrier is a must-have.</p>
                        </div>
                        <img src={require("../images/supplies/dog-crate.png")} alt="Dog Crate" />
                    </section>

                    <section id="poop-bags" className="supplies">
                        <div className="text-container">
                            <h3>Poop Bags</h3>
                            <p>Always have biodegradable poop bags on hand for walks. Consider a portable dispenser that attaches to the leash for easy access.</p>
                        </div>
                        <img src={require("../images/supplies/poop-bag.png")} alt="Poop Bags" />
                    </section>

                    <section id="dog-treats" className="supplies">
                        <div className="text-container">
                            <h3>Treats</h3>
                            <p>Chews are great for dental health and keeping your dog occupied. Opt for healthy, natural options like bully sticks or dental chews. Treats are also essential for training and rewarding good behavior.</p>
                        </div>
                        <img src={require("../images/supplies/dog-treats.png")} alt="Treats" />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Supplies;
