import React from "react";

const Dog = ({ dog, onClick, onDelete }) => {
  return (
    <section className="dog-container" onClick={onClick}>
      <img
        className="dog-img"
        src={`https://serverside-9phk.onrender.com/dogs/${dog.img_name}`}
        alt={dog.name}
      />
      <h4 className="dog-h4">{dog.name}</h4>
      <p className="dog-p">{dog.breed}</p>
      <p className="dog-p">{dog.age}</p>
      <button onClick={(e) => {
        e.stopPropagation(); // Prevent triggering onClick for details
        onDelete();
      }}>
        Delete
      </button>
    </section>
  );
};

export default Dog;
