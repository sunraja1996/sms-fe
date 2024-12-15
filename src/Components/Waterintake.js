import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WaterIntake = () => {
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(2000); 

  const addIntake = (amount) => {
    const newIntake = intake + amount;
    setIntake(newIntake);
    if (newIntake < goal) {
      toast.info(`You drank ${amount} ml! Keep going!`);
    } else {
      toast.success('Great job! You reached your goal!');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (intake < goal) {
        toast.info('Time to drink water!');
      }
    }, 3600000); 

    return () => clearInterval(interval);
  }, [intake, goal]);

  return (
    <div className="col-md-12 col-xl-12">
      <div className="card bg-c-yellow order-card">
        <div className="card-block">
          <h6 className="m-b-20">Water Intake Tracker</h6>
          <h2 className="text-right">
            <i className="fa fa-refresh f-left"></i>
            <span>{intake} ml</span>
          </h2>
          <div className="mt-3">
            <button
              className="btn btn-primary"
              onClick={() => addIntake(250)} 
            >
              Drink 250 ml
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={() => addIntake(500)} 
            >
              Drink 500 ml
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterIntake;
