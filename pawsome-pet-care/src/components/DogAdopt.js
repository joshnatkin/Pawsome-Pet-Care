import React from 'react';

const DogDetails = ({ dog, onClose }) => {
    return (
        <div className="dog-expanded-section">
            <span className="close-btn" onClick={onClose}>X</span>
            <img className="dog-img" src={`https://serverside-9phk.onrender.com/dogs/${dog.img_name}`} alt={dog.name} />
            <h4>{dog.name}</h4>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <p>Some Characteristic Traits: {dog.features.join(', ')}</p>
            <p>Is {dog.name} Vaccinated: {dog.vaccinated ? 'Yes' : 'No'}</p>
            <p>Dog's Gender: {dog.gender}</p>
        </div>
    );
};

export default DogDetails;
