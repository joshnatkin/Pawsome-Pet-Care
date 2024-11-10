import React from 'react';
import "../css/Supplies.css";

const DogFood = () => (
    <section id="dog-food" className="supplies">
        <div className="text-container">
            <h3>Quality Dog Food</h3>
            <p>A well-balanced, nutrient-rich dog food is crucial for your dog's health. Look for foods that suit your dog's age, breed, and health requirements.</p>
        </div>
        <img src={require("../images/supplies/dog-food.png")} alt="Quality Dog Food" />
    </section>
);

export default DogFood;
