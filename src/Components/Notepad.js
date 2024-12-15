import React, { useState } from 'react';
import './Notepad.css';

function Notepad() {
  const [currentNote, setCurrentNote] = useState(''); 
  const [savedNotes, setSavedNotes] = useState([]);   

  const handleInputChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const saveNote = () => {
    if (currentNote.trim()) {
      setSavedNotes([...savedNotes, currentNote]);
      setCurrentNote('');  
    }
  };

  const editNote = (index) => {
    setCurrentNote(savedNotes[index]); 
    deleteNote(index);  
  };

  const deleteNote = (index) => {
    setSavedNotes(savedNotes.filter((_, i) => i !== index)); 
  };

  const clearNote = () => {
    setCurrentNote('');
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Notepad</h1>
      
   
      <div className="form-group">
        <textarea
          className="form-control"
          rows="10"
          value={currentNote}
          onChange={handleInputChange}
          placeholder="Write your note here..."
        />
      </div>

      <div className="text-center">
        <button className="btn btn-primary m-2" onClick={saveNote}>Save Note</button>
        <button className="btn btn-secondary m-2" onClick={clearNote}>Clear Note</button>
      </div>

      <h2 className="text-center my-4">Saved Notes</h2>

      <div className="saved-notes">
        {savedNotes.length === 0 ? (
          <p className="text-center">No saved notes</p>
        ) : (
          <ul className="list-group">
            {savedNotes.map((note, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{note}</span>
                <div>
                  <button className="btn btn-warning btn-sm m-1" onClick={() => editNote(index)}>Edit</button>
                  <button className="btn btn-danger btn-sm m-1" onClick={() => deleteNote(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Notepad;
