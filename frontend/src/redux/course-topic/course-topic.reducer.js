import CourseTopicActionTypes from './course-topic.types';

const INITIAL_STATE = {
  isFetching: false,
  topics: [],
  completedLectures: [],
  completedAssignments: [],
  completedTests: [],
  course_name: null,
  course_id: null,
  errorMessage: undefined,
  attemptedTopicList: null
};

const courseTopicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseTopicActionTypes.FETCH_COURSE_TOPICS_START:
      return {
        ...state,
        isFetching: true,
      };
    case CourseTopicActionTypes.FETCH_COURSE_TOPICS_SUCCESS:
      const {
        course: { topics, courseName },
        courseResponse: { lecturesDone, assignmentsDone, testsDone, course },
      } = action.payload;
      let completedTopicsId = {}
      testsDone.forEach((test) => {
        completedTopicsId[test.test] = 'test'
      })
      assignmentsDone.forEach((assignment) => {
        completedTopicsId[assignment.assignment] = 'assignment'
      })
      lecturesDone.forEach((lecture) => {
        completedTopicsId[lecture.lecture] = 'lecture'
      })
      //console.log(completedTopicsId)
      
      

      return {
        ...state,
        isFetching: false,
        topics: topics,
        completedLectures: lecturesDone,
        completedAssignments: assignmentsDone,
        completedTests: testsDone,
        course_name: courseName,
        course_id: course,
        attemptedTopicList: completedTopicsId,
        
      };
    case CourseTopicActionTypes.FETCH_COURSE_TOPICS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default courseTopicReducer;
