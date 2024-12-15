import React, { useState } from 'react';
import './Calender.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [selectedDate, setSelectedDate] = useState(null); 
  const [notes, setNotes] = useState({}); 

  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  // Render the calendar
  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let days = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      days.push(<li key={`inactive-${i}`} className="inactive">{lastDateofLastMonth - i + 1}</li>);
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : "";
      days.push(
        <li
          key={`active-${i}`}
          className={`${isToday}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
          {notes[`${currYear}-${currMonth + 1}-${i}`] && (
            <div className="note-indicator">📝</div>
          )}
        </li>
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      days.push(<li key={`inactive-next-${i}`} className="inactive">{i - lastDayofMonth + 1}</li>);
    }

    return days;
  };

  const handlePrevNextClick = (id) => {
    setCurrMonth((prevMonth) => id === "prev" ? prevMonth - 1 : prevMonth + 1);
    setDate(new Date());
  };

  if (currMonth < 0 || currMonth > 11) {
    const newDate = new Date(currYear, currMonth, new Date().getDate());
    setCurrYear(newDate.getFullYear());
    setCurrMonth(newDate.getMonth());
  }

  const handleDateClick = (day) => {
    const selectedDateString = `${currYear}-${currMonth + 1}-${day}`;
    setSelectedDate(selectedDateString);
  };

  const handleNoteChange = (e) => {
    const newNotes = { ...notes };
    newNotes[selectedDate] = e.target.value;
    setNotes(newNotes);
  };

  const handleSaveNote = () => {
    const newNotes = { ...notes };
    newNotes[selectedDate] = notes[selectedDate] || "";
    setNotes(newNotes);
  };

  return (
    <div id='calender'>
    <div className="wrapper">
      <header>
        <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
        <div className="icons">
          <span id="prev" className="material-symbols-rounded"
            onClick={() => handlePrevNextClick("prev")}><ChevronLeftIcon /></span>
          <span id="next" className="material-symbols-rounded"
            onClick={() => handlePrevNextClick("next")}><ChevronRightIcon /></span>
        </div>
      </header>

      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {renderCalendar()}
        </ul>
      </div>

      {selectedDate && (
        <div className="note-section">
          <h3>Notes for {selectedDate}</h3>
          <textarea
            value={notes[selectedDate] || ''}
            onChange={handleNoteChange}
            placeholder="Add your note here"
          />
          <button onClick={handleSaveNote}>Save Note</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Calender;
