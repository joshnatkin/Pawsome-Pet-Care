import React from 'react';
import "../css/Supplies.css";

const PoopBags = () => (
    <section id="poop-bags" className="supplies">
        <div className="text-container">
            <h3>Poop Bags</h3>
            <p>Always have biodegradable poop bags on hand for walks. Consider a portable dispenser that attaches to the leash for easy access.</p>
        </div>
        <img src={require("../images/supplies/poop-bag.png")} alt="Poop Bags" />
    </section>
);

export default PoopBags;
