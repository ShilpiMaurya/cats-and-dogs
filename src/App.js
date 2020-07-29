import React, { useState } from "react";
import "./App.css";

function App() {
  const [dogLikes, setDogLikes] = useState(0);
  const [catLikes, setCatLikes] = useState(0);
  const incrementDogLikes = () => {
    setDogLikes(dogLikes + 1);
  };
  const incrementCatLikes = () => {
    setCatLikes(catLikes + 1);
  };

  return (
    <div>
      <h1>Are you a dog person or a cat person 🤔</h1>
      <div className="content">
        <div className="cat-content">
          <div className="dog-image" />
          <button onClick={incrementDogLikes}>❤️ Likes: {dogLikes}</button>
        </div>
        <div className="cat-content">
          <div className="cat-image"></div>
          <button onClick={incrementCatLikes}>❤️ Likes: {catLikes}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
