import axios from 'axios';

const getFeaturedCourses = async () => {
  const {data} = await axios.get(
    '/ldlms/v2/sfwd-courses?_fields=date,id,status,title,type,author,content,course_price',
  );

  return data;
};

const getMyCourses = async (id) => {
  const {data} = await axios.get(
    `ldlms/v2/users/${id}/courses?_fields=date,id,status,title,type,author,course_price`,
  );

  return data;
};

const getCategoryCourses = async (categoryId) => {
  const {data} = await axios.get(
    `wp/v2/ld_course_category/${categoryId}?_fields=date,id,status,title,type,author,course_price`,
  );

  return data;
};

const getCourseAuthor = async (id) => {
  const {data} = await axios.get(`/wp/v2/users/${id}?_fields=name`);

  return data;
};

const getCategories = async () => {
  const {data} = await axios.get('/wp/v2/ld_course_category');

  return data;
};

const getQuizQuestions = async (courseId) => {
  const {data} = await axios.get(`ldlms/v2/sfwd-quiz/${courseId}`);

  return data;
};

export {
  getFeaturedCourses,
  getMyCourses,
  getCourseAuthor,
  getCategoryCourses,
  getCategories,
  getQuizQuestions,
};
export default {
  getFeaturedCourses,
  getMyCourses,
  getCourseAuthor,
  getCategoryCourses,
  getCategories,
  getQuizQuestions,
};
