import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/HomePage/pages/index';
import SideNav from './StudentDashboard/SideNav/SideNav';
import { Navbar } from './HomePage/components/Navbar_New';
import StudentDashboard from './StudentDashboard';
import AssignmentStart from './AssignmentPages/AssignmentStart';
import AssignmentResults from './AssignmentPages/AssignmentResult';
import ChangePassword from './StudentDashboard/ChangePassword';
import FeesPage from './StudentDashboard/FeesPage/App';
import AssignmentPage from './AssignmentPages/AssignmentPage';
import Mainpage from './CourseDashboard/components/mainpage';
import VideoPage from './VideoPage/App';
import Profile from './StudentDashboard/ProfileSettings/App.js';
<<<<<<< Updated upstream
import CourseDashboard from './CourseDashboard';
=======
>>>>>>> Stashed changes
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact={true} component={Home} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/studentdashboard" component={StudentDashboard} />
        <Route path="/assignmentstart" component={AssignmentStart} />
        <Route path="/assignmentpage" component={AssignmentPage} />
        <Route path="/assignmentresults" component={AssignmentResults} /> 
        <Route path="/feespage" component={FeesPage} />
        <Route path="/enrolledcourses" component={Mainpage} />
        <Route path="/videopage" component={VideoPage} />
        <Route path="/profilesettings" component={Profile} />
<<<<<<< Updated upstream
        <Route path="/coursedashboard" component={CourseDashboard} />
=======
>>>>>>> Stashed changes
      </div>
    </Router>
  );
}

export default App;
