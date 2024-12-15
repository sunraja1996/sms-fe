import { Link } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Sidebar(){
      return(

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Student Monitor System</div>
            </a>

           
            <hr className="sidebar-divider my-0"/>

          
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                    </Link>
            </li>

           
            <hr className="sidebar-divider"/>


            <li className="nav-item">
                <Link className="nav-link" to="/calculator">
                    <CalculateIcon/>
                    <span>Calculator</span>
                    </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/todo">
                    <ListAltIcon/>
                    <span>Todos</span>
                    </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/notepad">
                    <EditNoteIcon/>
                    <span>Notepad</span>
                    </Link>
            </li>

            
            <li className="nav-item">
                <Link className="nav-link" to="/calender">
                    <CalendarMonthIcon/>
                    <span>Calender</span>
                    </Link>
            </li>

        </ul>
      )
}

export default Sidebar;