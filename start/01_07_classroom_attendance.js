// Write your code here

function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  }
  else {
    [teacher, ...students] = classList;
  }

  return students;
}

console.log(getStudents({ hasTeachingAssistant: true, classList: ['Teacher', 'TA', 'std1', 'std2'] }))
console.log(getStudents({ hasTeachingAssistant: false, classList: ['Teacher', 'std1', 'std2'] }))