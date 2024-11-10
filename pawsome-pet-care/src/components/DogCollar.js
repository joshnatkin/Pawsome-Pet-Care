import React from 'react';
import "../css/Supplies.css";

const DogCollar = () => (
    <section id="dog-collar" className="supplies">
        <div className="text-container">
            <h3>Dog Collar and ID</h3>
            <p>A sturdy, comfortable collar with an ID tag engraved with your contact information is essential for safety.</p>
        </div>
        <img src={require("../images/supplies/dog-collar.png")} alt="Dog Collar and ID" />
    </section>
);

export default DogCollar;
