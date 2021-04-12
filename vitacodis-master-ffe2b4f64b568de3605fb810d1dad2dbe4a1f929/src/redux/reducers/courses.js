import mockData from '_mockApi/coursesData';
import {
  SET_COURSES,
  SET_SELECTED_COURSE,
  SET_SELECTED_CATEGORIE,
} from '../actions/courses';

const initialState = {
  courses: mockData,
  selectedCourse: null,
  selectedCategorie: null,
};

const cursesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COURSES:
      return {
        ...state,
        courses: payload,
      };
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: payload,
      };
    case SET_SELECTED_CATEGORIE:
      return {
        ...state,
        selectedCategorie: payload,
      };
    default:
      return state;
  }
};

export default cursesReducer;
