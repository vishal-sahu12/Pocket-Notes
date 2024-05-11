// Body.js
import React, { useState } from "react";
import Card from "./Components/Card";
import PopUp from "./Components/PopUp";
import RightSideComponent from "./Components/RightSideComponent";
import Notes from "./Components/Notes";

const Body = () => {
    const [modal, setModal] = useState(false);
    const [taskId, setTaskId] = useState(null); // State to track the clicked task ID

    const handleCardItemClick = (taskId) => {
        // Set the state to indicate that a card item is clicked
       
        setTaskId(taskId);
    };

    return (
        <div className="container">
            {modal && <PopUp show={modal} onHide={() => setModal(false)} />}
            <div className="left-side">
                <h1>Pocket Notes</h1>
                <div className="notesBox">
                    {/* Pass handleCardItemClick function to the Card component */}
                    <Card onTaskClick={handleCardItemClick} />
                </div>
                <button onClick={() => setModal(true)}>+</button>
            </div>
            <div className="right-side">
                {/* Conditionally render Notes or RightSideComponent based on taskId */}
                {taskId ? <Notes taskId={taskId} /> : <RightSideComponent />}
            </div>
        </div>
    );
}

export default Body;
