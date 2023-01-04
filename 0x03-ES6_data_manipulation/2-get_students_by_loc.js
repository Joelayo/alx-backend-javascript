const getStudentsByLocation = (students, city) =>
/* eslint-disable */
  students.filter((student) => student.location === city);

export default getStudentsByLocation;
