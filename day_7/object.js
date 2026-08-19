class student {
  constructor(name, age, cgpa, leng) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.leng = leng;

    this.display = function () {
      console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    };
  }
}

let student1 = new student("Shefaul", 25, 3.67, ["Bangla", "English"]);

student1.display();
