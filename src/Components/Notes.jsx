import React, { useState, useEffect } from 'react';
import "../Css/Notes.css"

import sentBtn  from "../assets/sent-btn.png"

const Notes = ({ taskId }) => {
    // State to store the task messages
    const [taskMessages, setTaskMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Effect to load the task messages from local storage when the component mounts
    useEffect(() => {
        // Fetching all data from local storage
        const allTasks = JSON.parse(localStorage.getItem('tasks')) || {};
    
        console.log("All tasks:", allTasks);
    
        // Finding the messages for the specific taskId
        const messages = allTasks[taskId] || [];
    
        console.log("Messages for taskId:", taskId, messages);
    
        // Ensuring messages is an array
        if (!Array.isArray(messages)) {
            console.error(`Messages for taskId ${taskId} is not an array:`, messages);
            // Reset messages to an empty array
            setTaskMessages([]);
        } else {
            // Setting the messages in the state
            setTaskMessages(messages);
        }
    }, [taskId]);
    

    // Function to handle changes in the input field
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to handle submitting the input field value
    const handleSubmit = () => {
        setTaskMessages([...taskMessages, inputValue]);
        saveMessagesToLocalStorage([...taskMessages, inputValue]);
        setInputValue('');
    };

    // Function to handle saving the task messages to local storage
    const saveMessagesToLocalStorage = (messages) => {
        // Fetching all data from local storage
        const allTasks = JSON.parse(localStorage.getItem('tasks')) || {};

        // Updating the specific taskId with the new messages
        allTasks[taskId] = messages;

        // Saving the updated data back to local storage
        localStorage.setItem('tasks', JSON.stringify(allTasks));
    };

    return (
        <div className="notes-container">
            <header>
                {/* Display task messages */}
                <div className='header-container'>
                    <div className='nameCircle-header'> {taskId.slice(0, 2)}</div>
                    <div className="taskItem">
                        {taskId}
                    </div>
                </div>
                
              
            </header>
            <div className='notes-background'>
                {taskMessages.map((message, index) => (
                    <div className='card-Notes' key={index}>
                          {message}
                    </div>
                  
                ))}
                </div>

            <footer>
                <div className="notes-footer">
                    {/* Input field to enter task messages */}
                    <input type="text" placeholder="Enter Your Text here ...." value={inputValue} onChange={handleInputChange} />
                    {/* Submit button */}
                    <button onClick={handleSubmit}><img src={sentBtn}/></button>
                </div>
            </footer>
        </div>
    );
}

export default Notes;
