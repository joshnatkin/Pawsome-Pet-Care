import React, { useState } from "react";

const AddDog = (props) => {
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
    console.log(...formData);


    const response = await fetch("https://serverside-9phk.onrender.com/api/dogs/", {
      method: "POST",
      body: formData,
    });


    if (response.status === 200) {
      setResult("Dog successfully added!");
    } else {
      setResult(`Failed to add dog: `);
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="add-dog-form" onSubmit={addToServer}>
            <p>
              <label htmlFor="name">Dog's Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="breed">Breed:</label>
              <input
                type="text"
                id="breed"
                name="breed"
                required
                value={inputs.breed || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                required
                value={inputs.age || ""}
                onChange={handleChange}
              />
            </p>
            <p>
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
            </p>
            <p>
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
            </p>
            <p>
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
            </p>
            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  alt=""
                  src={inputs.img ? URL.createObjectURL(inputs.img) : ""}
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDog;
