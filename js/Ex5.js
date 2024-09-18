const student1 = "Ethan"
const studentMark = 56
let grade;

if (studentMark >= 80) {
    grade = "A"
} else if (studentMark >= 60 && studentMark < 80) {
    grade = "B"    
} else if (studentMark >= 40 && studentMark < 60) {
    grade = "C"    
} else if (studentMark < 40) {
    grade = "NoGrade"
}

console.log(`${student1} received ${grade} grade.`)