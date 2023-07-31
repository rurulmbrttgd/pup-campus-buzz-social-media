import "./confess.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import plus from "../../assets/plus.png"
// import karlosImage from "../../../public/upload/1690467391565karlos.jpg";
const Confess = () => {
  const file = useState(null);
  const [confession, setConfession] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [anonymous, setAnonymous] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();
  const [selectedButton, setSelectedButton] = useState(0);

  const mutation = useMutation(
    (newConfession) => {
      return makeRequest.post("/confessions", newConfession);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["confessions"]);
      },
    }
  );
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleImageClick = (button) => {
    setSelectedButton(button);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // let imgUrl = "";
    // if (file) imgUrl = await upload();
    // mutation.mutate({ confession });
    const newConfession = {
      confession,
      anonymous,
      selectedButton,
      title,
      // Add other fields you want to include in the newConfession object
    };
  
    // Call the mutation to store the new post
    mutation.mutate(newConfession);
  
    // Reset the state or variables for inputs after successful mutation
    setTitle("");
    setConfession("");
    setAnonymous(true); // Reset anonymous to true for the next confession
    // setButtonColor("");
    setSelectedButton(0);
  
    // Close the modal
    setShowModal(false);
    
  };

  return (
    <div className="confess">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={plus} alt="" />
            <input
              type="text"
              placeholder={`Click to Add a Confession`} 
              onClick={() => setShowModal(true)} 
              onChange={(e) => setConfession(e.target.value)}
              value={confession}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Write Your Confession</h2>
            
            <div class='second-layer'>
              <label>
                <input 
                  type="checkbox"
                  checked={anonymous}
                  onChange={() => setAnonymous(!anonymous)}
                />
                Anonymous
              </label>
              <button class = 'submit-button' onClick={handleClick}>Post</button>
            </div>
            <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            </div>
            <textarea
              placeholder="Confession"
              value={confession}
              onChange={(e) => setConfession(e.target.value)}
            />
            <div className="button-container">
              {/* Rectangle buttons with different colors */}
              <button
                className={`rectangle-button red`}
                onClick={() => handleImageClick(0)}
              >
              </button>
              <button
                className={`rectangle-button blue`}
                onClick={() => handleImageClick(1)}
              >
              </button>
              <button
                className={`rectangle-button green`}
                onClick={() => handleImageClick(2)}
              >
              </button>
            </div>
            <button class = 'close-button' onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Confess;
