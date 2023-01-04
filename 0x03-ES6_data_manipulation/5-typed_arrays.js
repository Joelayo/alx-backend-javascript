const updateStudentGradesByCity = (students, city, newGrades) => {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const grade = newGrades.find((g) => g.studentId === student.id);
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });
};

export default updateStudentGradesByCity;
