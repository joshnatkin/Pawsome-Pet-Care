import React from 'react';

const Dog = ({ dog, onClick }) => {
    return (
        <section className="dog-container" onClick={onClick}>
            <img className="dog-img" src={require(`../images/dogs/${dog.img_name}`)} alt={dog.name} />
            <h4 className="dog-h4">{dog.name}</h4>
            <p className="dog-p">{dog.breed}</p>
            <p className="dog-p">{dog.age}</p>
        </section>
    );
};

export default Dog;
