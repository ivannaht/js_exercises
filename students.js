// Group class

class Group {
    constructor(marks, subject) {
        this.marks = marks; 
        this.subject = subject;
    }

    showAverageMark() {
        let sum = this.marks.reduce((a, c) => a + c, 0);
        let average = sum / this.marks.length;

        return average;
    }

    showGrades() { 
        const grades = this.marks.map((mark, index) => {
            let grade;
            if (mark < 60) {
                grade = 'F';
            } else if (mark < 70) {
                grade = 'D';
            } else if (mark < 80) {
                grade = 'C';
            } else if (mark < 90) {
                grade = 'D';
            } else grade = 'A';

            return {student: `Student${index + 1}`, mark, grade};
    });

     return grades;  
    }

    toString() {
        return `${this.subject.toUpperCase()}:
        Average mark in the group: ${this.showAverageMark()}
        Student list: 
        ${this.showGrades()}`;
    }

    sort() {
        this.marks.sort((a, b) => b - a);
        return this.marks;
    }
}

const group1 = new Group([10, 20, 50, 80, 70, 65, 99, 100, 30], "English");

console.log(group1);
console.log(group1.toString());
console.log(group1.sort());
console.log(group1.showGrades());
