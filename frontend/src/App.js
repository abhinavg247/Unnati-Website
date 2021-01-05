import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
 import AssignmentPage from './student/pages/assignment-page/assignment-page.component';
// import CourseOverview from './pages/course-overview/course-overview.component';
// import CourseVideo from './pages/course-video/course-video-page.component';
// import DemoPage from './pages/demo-page/demo-page.component';
// import HomePage from './pages/homepage/homepage.component';

// //import { SideNav } from './pages/Profile-page/profile-page.styled.components';
// import StudentDashboard from './pages/student-dashboard/StudentDashboard';
// import SideNav from './components/SideNav/SideNav';
// import CourseSideNav from './components/course-sidenav/course-sidenav.components';
// //import StudentCoursePage from './pages/demo-student-course-page/demo-student-course-page';
// import TestPage from './pages/test-page/test-page.component';
// import UserProfileCard from './components/SideNav/UserProfile/UserProfileCard';
// import FeesPage from './pages/FeesPage/App';
// // import StudentCourseTopicPage from './pages/student-course-topic-page/student-course-topic-page';
// import StudentPage from './pages/student-page/student-page.component';
// // import StudentCoursePage from './pages/demo-student-course-page/demo-student-course-page';


import HomePage from './student/pages/homepage/homepage.component';
import StudentPage from './student/pages/student-page/student-page.component';
import FeesPage from './student/pages/FeesPage/App';
import SignUpForm from './student/pages/Signup-page/SignupForm';
import LogInForm from './student/pages/Login-page/LoginForm.page';
import Profile from './student/pages/Profile-page/profile-page.component'
import TestPage from './student/pages/test-page/test-page.component';

function App() {
    return (<
        BrowserRouter >
        <
        Switch >
            <
                Route path='/'
                exact component={HomePage}
            />
             <
                Route path='/student' component={StudentPage}
            /> <
                Route path='/profilesettings'
                component={Profile}
            />
            <Route path='/feespage' component={FeesPage} />
            <Route path='/test' component={TestPage} />
            </Switch> 
            </BrowserRouter>
    );
}

export default App;