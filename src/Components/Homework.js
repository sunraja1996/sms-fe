import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Homework.css'

const Homework = () => {
  const [homework, setHomework] = useState([
    { id: 1, subject: 'Math', task: 'Solve exercises 1-10 on page 22', completed: false },
    { id: 2, subject: 'Science', task: 'Write an essay on the water cycle', completed: false },
    { id: 3, subject: 'English', task: 'Read chapter 5 and write notes', completed: false },
  ]);

  const handleMarkAsCompleted = (id) => {
    setHomework(prevHomework =>
      prevHomework.map(task =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
    toast.success('Homework completed!');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      toast.warning('Time to complete your homework!');
    }, 3600000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {homework.map((task) => (
          <div key={task.id} className="col-md-12 col-xl-4">
            <div className={`card order-card ${task.completed ? 'bg-success' : 'bg-warning'}`}>
              <div className="card-block">
                <h6 className="m-b-20">{task.subject}</h6>
                <h2 className="text-right">{task.task}</h2>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => handleMarkAsCompleted(task.id)}
                  disabled={task.completed}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Homework;
