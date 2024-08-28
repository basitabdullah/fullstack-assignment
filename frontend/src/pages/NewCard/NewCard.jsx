import { useNavigate } from "react-router-dom";
import "./NewCard.scss";

import { useState } from "react";

const NewCard = () => {
  // State to manage form input values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCard = {
      title,
      description,
    };

    try {
      const response = await fetch("http://localhost:4000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });

      if (response.ok) {
        setTitle("");
        setDescription("");
        alert("Card created successfully!");
        navigate("/");
      } else {
        throw new Error("Failed to create card");
      }
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  return (
    <div className="newCard">
      <form onSubmit={handleSubmit}>
        <label>Enter A Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Enter A Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCard;
