import React from 'react';
import "../css/Supplies.css";

const DogLeash = () => (
    <section id="dog-leash" className="supplies">
        <div className="text-container">
            <h3>Leash</h3>
            <p>Choose a durable leash that's comfortable for you to hold. Retractable leashes can provide more freedom, while standard leashes offer better control.</p>
        </div>
        <img src={require("../images/supplies/dog-leash.png")} alt="Leash" />
    </section>
);

export default DogLeash;
