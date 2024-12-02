import React, { useState, useEffect } from "react";
import axios from "axios";
import DogDetails from "../components/DogAdopt";
import Dog from "../components/Dogs";
import AddDog from "../components/AddDog";
import EditDog from "../components/EditDog"; // Import EditDog component
import DeleteDog from "../components/DeleteDog"; // Import DeleteDog component
import "../css/Adopt.css";
import "../css/AddDog.css";

const Adopt = () => {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [showAddDog, setShowAddDog] = useState(false);
  const [showEditDog, setShowEditDog] = useState(false); // State for edit dog modal
  const [dogToEdit, setDogToEdit] = useState(null); // Store the dog to edit
  const [showDeleteDog, setShowDeleteDog] = useState(false); // State for delete dog modal
  const [dogToDelete, setDogToDelete] = useState(null); // Store the dog to delete

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const response = await axios.get("https://serverside-9phk.onrender.com/api/dogs");
      setDogs(response.data.animals);
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };

  const showDetails = (dog) => {
    setSelectedDog(dog);
  };

  const closeDetails = () => {
    setSelectedDog(null);
  };

  const openAddDogModal = () => {
    setShowAddDog(true);
  };

  const closeAddDogModal = () => {
    setShowAddDog(false);
    fetchDogs(); // Refresh the dog list after adding a new dog
  };

  const openEditDogModal = (dog) => {
    setDogToEdit(dog);
    setShowEditDog(true);
  };

  const closeEditDogModal = () => {
    setShowEditDog(false);
    setDogToEdit(null); // Clear the dog to edit
    fetchDogs(); // Refresh the dog list after editing a dog
  };

  const openDeleteDogModal = (dog) => {
    setDogToDelete(dog);
    setShowDeleteDog(true);
  };

  const closeDeleteDogModal = () => {
    setShowDeleteDog(false);
    setDogToDelete(null); // Clear the dog to delete
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
              <option value=""></option>
              <option value="age">Age</option>
              <option value="Low">Price: Low to High</option>
              <option value="High">Price: High to Low</option>
            </select>
          </section>
          <button id="add-dog-button" onClick={openAddDogModal}>
            Add Dog +
          </button>
        </div>

        <div id="animals">
          {dogs.map((dog) => (
            <Dog
              key={dog._id}
              dog={dog}
              onClick={() => showDetails(dog)} // Show details modal
              onDelete={() => openDeleteDogModal(dog)} // Open delete modal
              onEdit={() => openEditDogModal(dog)} // Open edit modal
            />
          ))}
        </div>
      </div>

      {selectedDog && (
        <div
          style={{
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
            overflowY: "auto",
          }}
        >
          <DogDetails dog={selectedDog} onClose={closeDetails} />
        </div>
      )}

      {showAddDog && <AddDog closeDialog={closeAddDogModal} />}

      {showEditDog && (
        <EditDog
          {...dogToEdit} // Pass selected dog's details to the EditDog component
          closeDialog={closeEditDogModal}
          updateDog={(updatedDog) =>
            setDogs((prevDogs) =>
              prevDogs.map((dog) => (dog._id === updatedDog._id ? updatedDog : dog))
            )
          }
        />
      )}

      {showDeleteDog && (
        <DeleteDog
          _id={dogToDelete._id}
          name={dogToDelete.name}
          closeDialog={closeDeleteDogModal}
          refreshDogs={fetchDogs}
        />
      )}
    </div>
  );
};

export default Adopt;
