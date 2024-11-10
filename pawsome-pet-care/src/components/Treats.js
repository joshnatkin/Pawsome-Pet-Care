import React from 'react';
import "../css/Supplies.css";

const DogTreats = () => (
    <section id="dog-treats" className="supplies">
        <div className="text-container">
            <h3>Treats</h3>
            <p>Chews are great for dental health and keeping your dog occupied. Opt for healthy, natural options like bully sticks or dental chews. Treats are also essential for training and rewarding good behavior.</p>
        </div>
        <img src={require("../images/supplies/dog-treats.png")} alt="Treats" />
    </section>
);

export default DogTreats;
