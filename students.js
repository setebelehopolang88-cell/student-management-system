// DATA FILE: the starting information for the app.

// const + array of strings: the list of courses never gets reassigned
export const courses = [
  "Diploma in Information Technology",
  "Diploma in Business Information Technology",
  "Diploma in Multimedia Technology",
  "Diploma in Software Engineering",
];

// const + object: a blank student used by the "Add student" form
// (strings for text, "" for age until the user types, boolean for enrolled)
export const emptyStudent = {
  studentId: "",
  name: "",
  age: "",
  email: "",
  course: "",
  enrolled: true,
};

// const + array of objects: the students shown the first time the app opens
export const starterStudents = [
  { id: 1, studentId: "STU001", name: "Hopolang Setebele", age: 20, email: "hopolang@example.com", course: courses[0], enrolled: true },
  { id: 2, studentId: "STU002", name: "Thabo Nkotsi", age: 22, email: "thabo@example.com", course: courses[2], enrolled: true },
  { id: 3, studentId: "STU003", name: "Tlali Seonya", age: 19, email: "tlali@example.com", course: courses[3], enrolled: false },
];
