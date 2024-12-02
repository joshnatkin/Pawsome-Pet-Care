import React, { useState } from "react";
import "../css/Delete.css";

const DeleteDog = ({ _id, name, closeDialog, refreshDogs }) => {
  const [result, setResult] = useState("");

  const deleteDog = async () => {
    const response = await fetch(`https://serverside-9phk.onrender.com/api/dogs/${_id}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      setResult("Dog successfully deleted.");
      refreshDogs(); // Refresh the list after deletion
      closeDialog(); // Close the delete modal
    } else {
      setResult("Sorry, we couldn't delete the dog at this time.");
    }
  };

  return (
    <div id="delete-dialog" className="modal">
      <div className="delete-modal">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the dog {name}?</h3>
            <section>
              <button onClick={closeDialog}>No</button>
              <button onClick={deleteDog}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
  );
};

export default DeleteDog;
