// PopUp.js
import React, { useState } from 'react';
import "../Css/Modal.css";

const PopUp = ({ show, onHide }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleNameChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    };

    const handleAddTask = () => {
        // Retrieve the existing tasks object from local storage
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || {};
        // Add the new task name and description to the tasks object
        existingTasks[taskName] = taskDescription;
        // Store the updated tasks object back in local storage
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        onHide();
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Create New Task</h4>
                    </div>
                    <div className="modal-body">
                        <h3>Task Name</h3>
                        <input className='input' type="text" placeholder='Enter Task Name' value={taskName} onChange={handleNameChange} />
                        <h3>Task Description</h3>
                        <textarea className='input' placeholder='Enter Task Description' value={taskDescription} onChange={handleDescriptionChange} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={handleAddTask}>Create</button>
                        <button type="button" className="btn btn-default" onClick={onHide}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
