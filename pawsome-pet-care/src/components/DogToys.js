import React from 'react';
import "../css/Supplies.css";

const DogToys = () => (
    <section id="dog-toys" className="supplies">
        <div className="text-container">
            <h3>Dog Toys</h3>
            <p>Toys help keep dogs entertained, active, and mentally stimulated. Durable chew toys, puzzle toys, and balls are great for preventing boredom.</p>
        </div>
        <img src={require("../images/supplies/dog-toy.png")} alt="Dog Toys" />
    </section>
);

export default DogToys;
