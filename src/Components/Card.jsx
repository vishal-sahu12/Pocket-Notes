// Card.js
import React from 'react';

const Card = ({ onTaskClick }) => {
    // Retrieve the tasks object from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || {};

    return (
        <div className="cardContainer">
            {Object.keys(tasks).map((taskId, index) => (
                <div className='main-card' key={index} onClick={() => onTaskClick(taskId)}>
                    <div className='nameCircle'></div>
                    <div className="taskItem">
                        {taskId}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
