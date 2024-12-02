import React, { useState } from "react";

const EditDog = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    breed: props.breed,
    age: props.age,
    features: props.features.join(", "),
    vaccinated: props.vaccinated,
    gender: props.gender,
    prev_img: props.img_name,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const { name } = event.target;
    const value = event.target.files[0];
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Updating dog information...");

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("breed", inputs.breed);
    formData.append("age", inputs.age);
    formData.append("features", inputs.features);
    formData.append("vaccinated", inputs.vaccinated);
    formData.append("gender", inputs.gender);
    if (inputs.img) {
      formData.append("img", inputs.img);
    }

    try {
      const response = await fetch(`https://serverside-9phk.onrender.com/api/dogs/${inputs._id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const updatedDog = await response.json();
        setResult("Dog information successfully updated!");
        props.updateDog(updatedDog);
        props.closeDialog();
      } else {
        setResult("Failed to update dog information.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="breed">Breed:</label>
              <input
                type="text"
                id="breed"
                name="breed"
                value={inputs.breed}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={inputs.age}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="features">Features:</label>
              <input
                type="text"
                id="features"
                name="features"
                value={inputs.features}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="vaccinated">Vaccinated:</label>
              <select
                id="vaccinated"
                name="vaccinated"
                value={inputs.vaccinated}
                onChange={handleChange}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </p>
            <p>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={inputs.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </p>
            <p>
              <label htmlFor="img">Upload New Image:</label>
              <input
                type="file"
                id="img"
                name="img"
                onChange={handleImageChange}
                accept="image/*"
              />
            </p>
            <p>
              <button type="submit">Update Dog</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDog;
