function Student (name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.grades = [];
    this.attendance = [];

    this.averageGrade = function () {
        return this.grades.reduce((total, grade) => total + grade, 0) / this.grades.length || 0;
    }

    this.getAge = function () {
        return new Date().getFullYear() - this.year;
    }

    this.present = function () {
        if (this.attendance.length <= 25) {
            this.attendance.push(true);
        }
        else {
            console.log("Can't be more than 25 attendances");
        }
    }

    this.absent = function () {
        if (this.attendance.length <= 25) {
            this.attendance.push(false);
        }
        else {
            console.log("Can't be more than 25 attendances");
        }
    }

    this.addGrade = function (grade) {
        if (grade > 0 && grade <= 100) {
            this.grades.push(grade);
        }
        else {
            console.log("False grade")
        }
    }

    this.summary = function () {
        const attended = this.attendance.filter((attended) => attended === true).length;
        const avgAttendance = attended/this.attendance.length;

        if (this.averageGrade() >= 90 && avgAttendance >= 0.9) {
            return "Молодець!";
        }
        else if (this.averageGrade() >= 90 || avgAttendance >= 0.9) {
            return "Добре, але можна краще";
        }
        else {
            return "Редиска!";
        }
    }
}

const student1 = new Student('Artem', 'Ryzhenko', 2003);
student1.addGrade(90);
student1.addGrade(80);
student1.addGrade(70);
student1.present();
student1.absent();
console.log(student1.name, student1.surname, student1.year, student1.getAge(), student1.averageGrade(),
    student1.summary());

const student2 = new Student('Vadym', 'Tarakatov', 2005);
console.log();
student2.addGrade(90);
student2.addGrade(95);
student2.addGrade(96);
student2.addGrade(97);

// Генерація відвідувань
let i = 0;
while (i <= 23){
    student2.present();
    i++;
}
student2.absent();
student2.absent();

//Помилка, т.к. більше 25
student2.absent();

console.log(student2.name, student2.surname, student2.year, student2.getAge(), student2.averageGrade(),
    student2.summary());

const student3 = new Student('Alex', 'Grinch', 2000);
console.log();

// Генерація відвідувань
i = 0;
while (i <= 23){
    student3.absent();
    i++;
}
student3.present();
student3.present();

student3.addGrade(90);
student3.addGrade(88);
student3.addGrade(95);
student3.addGrade(100);
student3.addGrade(92);

student3.addGrade(-1);
student3.addGrade(101);

console.log(student3.name, student3.surname, student3.year, student3.getAge(), student3.averageGrade(),
    student3.summary());