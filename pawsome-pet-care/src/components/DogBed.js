import React from 'react';
import "../css/Supplies.css";

const DogBed = () => (
    <section id="dog-bed" className="supplies">
        <div className="text-container">
            <h3>Dog Bed</h3>
            <p>A comfortable bed is essential for a dog's rest. Look for memory foam options or orthopedic beds for older dogs that provide extra joint support.</p>
        </div>
        <img src={require("../images/supplies/dog-bed.png")} alt="Dog Bed" />
    </section>
);

export default DogBed;
