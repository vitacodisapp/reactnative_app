const SET_COURSES = 'SET_COURSES';
const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
const SET_SELECTED_CATEGORIE = 'SET_SELECTED_CATEGORIE';

const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

const setSelectedCourse = (course) => ({
  type: SET_SELECTED_COURSE,
  payload: course,
});

const setSelectedCategorie = (categorie) => ({
  type: SET_SELECTED_CATEGORIE,
  payload: categorie,
});

export {
  SET_COURSES,
  SET_SELECTED_COURSE,
  SET_SELECTED_CATEGORIE,
  setCourses,
  setSelectedCourse,
  setSelectedCategorie,
};

export default {
  SET_COURSES,
  SET_SELECTED_COURSE,
  SET_SELECTED_CATEGORIE,
  setCourses,
  setSelectedCourse,
  setSelectedCategorie,
};
