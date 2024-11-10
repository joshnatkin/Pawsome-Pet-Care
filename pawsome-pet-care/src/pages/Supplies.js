import React from 'react';
import "../css/Supplies.css";
import DogBed from "../components/DogBed";
import FoodBowls from "../components/FoodBowls";
import DogFood from "../components/DogFood";
import DogCollar from "../components/DogCollar";
import DogLeash from "../components/DogLeash";
import DogToys from "../components/DogToys";
import GroomingTools from "../components/GroomingTools";
import DogCrate from "../components/DogCrate";
import PoopBags from "../components/PoopBags";
import Treats from "../components/Treats";


const Supplies = () => {
    return (
        <div id="group-main-content">
            <div className="container">
                <img id="group1-img" src={require("../images/nine-dogs-in-grassy-field.jpg")} alt="Group of dogs in grassy field" />
            </div>
            <h2>Top 10 Best Supplies for Your Pets</h2>
            <div id="group">
                <DogBed />
                <FoodBowls />
                <DogFood />
                <DogCollar />
                <DogLeash />
                <DogToys />
                <GroomingTools />
                <DogCrate />
                <PoopBags />
                <Treats />
            </div>
        </div>
    );
};

export default Supplies;
