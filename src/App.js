import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./Components/Dashboard/dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Todo from "./Components/Todo";
import Calculator from "./Components/Calculator";
import Notepad from "./Components/Notepad";
import Calender from "./Components/Calender";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Homepage/>}>
            <Route  path="dashboard" element={<Dashboard/>} /> 
            <Route  path="calculator" element={<Calculator/>} /> 
            <Route  path="todo" element={<Todo/>} /> 
            <Route  path="notepad" element={<Notepad/>}/>
            <Route path="calender" element={<Calender/>}></Route>
      </Route>
      <Route  path="/login" element={<Login/>} />
      <Route  path="/Signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
