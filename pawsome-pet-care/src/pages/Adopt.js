// Adopt.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogDetails from "../components/DogAdopt"; // Adjust the path as necessary
import Dog from "../components/Dogs"; // Adjust the path as necessary
import "../css/Adopt.css";

const Adopt = () => {
    const [dogs, setDogs] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await axios.get("https://serverside-9phk.onrender.com/api/house_plans");
                setDogs(response.data.animals);
            } catch (error) {
                console.error("Error fetching dogs:", error);
            }
        };
    
        fetchDogs();
    }, []);


    const showDetails = (dog) => {
        setSelectedDog(dog);
    };

    const closeDetails = () => {
        setSelectedDog(null);
    };

    return (
        <div id="adopt-content">
            <div id="adopt-top">
                <h2>Adopting Pets Near You</h2>
                <div id="adopt-filters">
                    <section id="breed">
                        <label htmlFor="dog-search">Search for Breed</label>
                        <input id="dog-search" type="text" />
                    </section>
                    <section id="chars">
                        <p>Sort by</p>
                        <label htmlFor="sort-options"></label>
                        <select id="sort-options">
                            <option value="" selected></option>
                            <option value="age">Age</option>
                            <option value="Low">Price: Low to High</option>
                            <option value="High">Price: High to Low</option>
                        </select>
                    </section>
                </div>
                <div id="animals">
                    {dogs.map(dog => (
                        <Dog key={dog.id} dog={dog} onClick={() => showDetails(dog)} />
                    ))}
                </div>
            </div>

            {/* Render DogDetails conditionally as a popup overlay */}
            {selectedDog && (
                <div style={{
                    position: "fixed",
                    top: "50%", 
                    left: "50%", 
                    transform: "translate(-50%, -50%)", 
                    width: "500px",
                    height: "auto", 
                    maxHeight: "80%", 
                    backgroundColor: "var(--color-light-grayish-blue)",
                    color: "black",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", 
                    overflowY: "auto"
                }}>
                    <DogDetails dog={selectedDog} onClose={closeDetails} />
                </div>
            )}
        </div>
    );
};

export default Adopt;
