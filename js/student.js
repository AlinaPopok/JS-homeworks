const Student = function (name, secondName, year) {
  this.name = name;
  this.secondName = secondName;
  this.year = year;
  this.lessonCounter = 0;
  this.attendance = new Array(25);
  this.marks = [];

  Student.prototype.getAge = () => new Date().getFullYear() - this.year;

  Student.prototype.present = () => changeAttendance(true);

  Student.prototype.absent = () => changeAttendance(false);

  Student.prototype.addMark = (num) => {
    if (num > 0 && num <= 100) {
      this.marks.push(num);
    } else {
      throw new Error("Некоректна оцінка");
    }
  };
  Student.prototype.summary = () => {
    const markSum = this.marks.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    const averageMark = markSum / this.marks.length;
    const attendanceSum = this.attendance.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    const averageAttendance = attendanceSum / this.attendance.length;

    if (averageMark > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageMark > 90 || averageAttendance > 0.9) {
      return "Добре, але можна краще ";
    } else if (averageMark < 90 && averageAttendance < 0.9) {
      return "Редиска!";
    } else {
      return "недостатньо даних";
    }
  };
  const changeAttendance = (isPresent) => {
    if (this.lessonCounter <= this.attendance.length) {
      this.attendance.splice(this.lessonCounter, 1, isPresent);
      this.lessonCounter++;
    } else {
      throw new Error("кількість заннять перевищено");
    }
  };
};

export default Student;
