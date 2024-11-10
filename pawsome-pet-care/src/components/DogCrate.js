import React from 'react';
import "../css/Supplies.css";

const DogCrate = () => (
    <section id="dog-crate" className="supplies">
        <div className="text-container">
            <h3>Dog Crate</h3>
            <p>Whether for training, traveling, or providing a safe space for your dog, a comfortable and well-ventilated crate or carrier is a must-have.</p>
        </div>
        <img src={require("../images/supplies/dog-crate.png")} alt="Dog Crate" />
    </section>
);

export default DogCrate;
