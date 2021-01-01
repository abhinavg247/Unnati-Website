import './App.css';
import AssignmentPage from './pages/assignment-page/assignment-page.component';
import CourseOverview from './pages/course-overview/course-overview.component';
import CourseVideo from './pages/course-video/course-video-page.component';
import DemoPage from './pages/demo-page/demo-page.component';
import HomePage from './pages/homepage/homepage.component';
import Profile from './pages/Profile-page/profile-page.component';
//import { SideNav } from './pages/Profile-page/profile-page.styled.components';
import StudentDashboard from './pages/student-dashboard/StudentDashboard';
import SideNav from './components/SideNav/SideNav';
import CourseSideNav from './components/course-sidenav/course-sidenav.components';
import StudentCoursePage from './pages/demo-student-course-page/demo-student-course-page';

function App() {
  // return <StudentDashboard />;
  // return <DemoPage />;
  return <HomePage />;
  // return <CourseVideo/>;
}

export default App;
