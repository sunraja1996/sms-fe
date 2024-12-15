import React, { useState, useEffect } from 'react';
import './dashboard.css'; 
import EventIcon from '@mui/icons-material/Event';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Waterintake from '../Waterintake';
import Homework from '../Homework';

function Dashboard() {

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB');

  const [time, setTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-6">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h6 className="m-b-20">Date</h6>
                <h2 className="text-right">
                  <EventIcon />
                  <span>{formattedDate}</span>
                </h2>
                <p className="m-b-0">Learn from yesterday, live for today, hope for tomorrow</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-6">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20">Time</h6>
                <h2 className="text-right">
                  <AccessTimeFilledIcon />
                  <span>{time}</span>
                </h2>
                <p className="m-b-0">Time is the longest distance between two places.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <Waterintake />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <Homework />
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Dashboard;
