import React, { useState } from "react";
import "../css/AddDog.css";

const AddDog = ({ closeDialog, refreshDogs }) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    setInputs((values) => ({ ...values, img: event.target.files[0] }));
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://serverside-9phk.onrender.com/api/dogs/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        setResult("Dog successfully added!");
        refreshDogs(); // Refresh the dog list
        closeDialog(); // Close the modal
      } else {
        setResult("Failed to add dog. Please check your inputs and try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="add-dialog" className="modal">
      <div className="modal-content">
        <span className="dialog-close" onClick={closeDialog}>
          &times;
        </span>
        <form id="add-dog-form" onSubmit={addToServer}>
          <div className="form-row">
            <label htmlFor="name">Dog's Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="breed">Breed:</label>
            <input
              type="text"
              id="breed"
              name="breed"
              required
              value={inputs.breed || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              required
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              required
              value={inputs.gender || ""}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="features">Features:</label>
            <input
              type="text"
              id="features"
              name="features"
              placeholder="Comma-separated (e.g., Friendly, Playful)"
              required
              value={inputs.features || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="vaccinated">Is Vaccinated?</label>
            <select
              id="vaccinated"
              name="vaccinated"
              required
              value={inputs.vaccinated || ""}
              onChange={handleChange}
            >
              <option value="">Select Vaccination Status</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="img">Upload Image:</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="button-row">
            <button type="submit">Submit</button>
          </div>

          <p>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default AddDog;
