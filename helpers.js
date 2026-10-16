// HELPER FUNCTIONS: small, reusable functions with no React inside.

// Gets the initials for the picture circle, e.g. "Hopolang Setebele" -> "HS"
export function getInitials(name) {
  // "var" is used here on purpose: it is function-scoped, so these
  // variables only exist inside this function.
  var words = name.trim().split(" ");
  var initials = words[0][0];
  if (words.length > 1) {
    initials = initials + words[words.length - 1][0];
  }
  return initials.toUpperCase();
}

// Checks the form and RETURNS an object of error messages.
// An empty object means everything is valid.
export function validateStudent(form, students) {
  const errors = {};
  const studentId = form.studentId.trim();
  const age = Number(form.age); // the age input gives text, so turn it into a number
  const otherStudents = students.filter((s) => s.id !== form.id); // ignore the student being edited

  if (studentId === "") {
    errors.studentId = "Enter a student ID.";
  } else if (otherStudents.some((s) => s.studentId.toLowerCase() === studentId.toLowerCase())) {
    errors.studentId = "This student ID is already used.";
  }

  if (form.name.trim().length < 3) {
    errors.name = "Enter a full name (at least 3 letters).";
  }

  if (!Number.isInteger(age) || age < 16 || age > 100) {
    errors.age = "Enter an age from 16 to 100.";
  }

  // simple email pattern: something@something.something
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email, e.g. name@example.com.";
  }

  if (form.course === "") {
    errors.course = "Choose a course.";
  }

  return errors;
}
