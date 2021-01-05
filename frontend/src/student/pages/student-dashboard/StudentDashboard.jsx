import React from 'react';
import CafeOverview from '../../components/CafeDetails/CafeDetails';
import ClassOverview from '../../components/CafeDetails/classmate';
import Card from '../../components/EnrolledCourses/EnrolledCourses';
import DiscoverCard from '../../components/DiscoverCourses/DiscoverCourses';
import {
  HorizontalFlexBox,
  VerticleFlexBox,
  CafeDetail,
  CafeDetail1,
  CafeDetail2,
  VerticleFlexBox2,
  EnrolledCoursesWrapper,
} from './student.styles';

//libraries used
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux used
import { selectAllCourses } from '../../redux/courses/courses.selectors';
import { fetchAllCoursesStartAsync } from '../../redux/courses/courses.actions';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import { selectUserCafeDetails } from '../../redux/cafe/cafe.selectors';
import { fetchUserCafeStartAsync } from '../../redux/cafe/cafe.actions';
import { CafeDetails } from '../../components/CafeDetails/Cafe.Details.Styles';
import SideNav from '../../components/SideNav/SideNav';
//components used

//styles used

class StudentDashboard extends React.Component {
  componentDidMount() {
    const { fetchAllCoursesStartAsync, fetchUserCafeStartAsync } = this.props;
    // console.log('Component Mounted');
    fetchAllCoursesStartAsync();
  }

  render() {
    const { userId, userCafe, allCourses } = this.props;
    // console.log(allCourses);
    // console.log(userCafe);
    return (
      <>
        <HorizontalFlexBox>
          <VerticleFlexBox>
            <CafeDetail>Cafe Details</CafeDetail>
            <CafeOverview
              cafe_name='hi'
              cafe_address={userCafe ? userCafe.location : null}
              faculty_incharge='hi'
            />
          </VerticleFlexBox>
          <VerticleFlexBox>
            <CafeDetail1>You Have</CafeDetail1>
            <ClassOverview student_number='hihi' />
          </VerticleFlexBox>
        </HorizontalFlexBox>
        <VerticleFlexBox2>
          <CafeDetail2>Enrolled Course</CafeDetail2>
          <EnrolledCoursesWrapper>
            {allCourses ? (
              allCourses.map((course, index) => (
                <Card course_name={course.subjectName} key={course._id} />
              ))
            ) : (
              <h2>Loading...</h2>
            )}
          </EnrolledCoursesWrapper>
        </VerticleFlexBox2>
        <VerticleFlexBox2>
          <CafeDetail2>Discover More Courses</CafeDetail2>
          <EnrolledCoursesWrapper>
            {allCourses ? (
              allCourses.map((course) => (
                <DiscoverCard
                  course_name={course.subjectName}
                  key={course._id}
                />
              ))
            ) : (
              <h2>Loading...</h2>
            )}
          </EnrolledCoursesWrapper>
        </VerticleFlexBox2>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  allCourses: selectAllCourses,
  userId: selectCurrentUserId,
  userCafe: selectUserCafeDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCoursesStartAsync: () => dispatch(fetchAllCoursesStartAsync()),
  fetchUserCafeStartAsync: () => dispatch(fetchUserCafeStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);