import React from 'react';
import "../css/Supplies.css";

const DogBowls = () => (
    <section id="dog-bowls" className="supplies">
        <div className="text-container">
            <h3>Food and Water Bowls</h3>
            <p>Opt for stainless steel or ceramic bowls, which are durable and easy to clean. Elevated bowls can be beneficial for larger breeds to help with digestion.</p>
        </div>
        <img src={require("../images/supplies/dog-bowl.png")} alt="Food and Water Bowls" />
    </section>
);

export default DogBowls;
