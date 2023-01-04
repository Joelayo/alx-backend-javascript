const getStudentIdsSum = (students) =>
/* eslint-disable */
  students.reduce((sum, student) => sum + student.id, 0);

export default getStudentIdsSum;