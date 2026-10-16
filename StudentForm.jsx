import { useState } from "react";
import { courses } from "../data/students.js";
import { validateStudent } from "../helpers.js";

// The form used for BOTH adding and editing.
// "student" is the starting data: blank for add, filled in for edit.
export default function StudentForm({ student, students, onSave, onCancel }) {
  const [form, setForm] = useState(student);   // what the user has typed
  const [errors, setErrors] = useState({});    // error messages to show

  // runs every time the user types, picks or ticks something
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // runs when "Save student" is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    const foundErrors = validateStudent(form, students);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return; // stop if there are errors

    // clean the text and turn age into a real number before saving
    onSave({
      ...form,
      studentId: form.studentId.trim(),
      name: form.name.trim(),
      email: form.email.trim(),
      age: Number(form.age),
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row">
        <label>Student ID
          <input name="studentId" value={form.studentId} onChange={handleChange}
                 placeholder="e.g. STU004" className={errors.studentId ? "invalid" : ""} />
          <small className="error">{errors.studentId}</small>
        </label>

        <label>Age
          <input name="age" type="number" value={form.age} onChange={handleChange}
                 placeholder="e.g. 20" className={errors.age ? "invalid" : ""} />
          <small className="error">{errors.age}</small>
        </label>
      </div>

      <label>Full name
        <input name="name" value={form.name} onChange={handleChange}
               placeholder="e.g. Hopolang Setebele" className={errors.name ? "invalid" : ""} />
        <small className="error">{errors.name}</small>
      </label>

      <label>Email address
        <input name="email" type="email" value={form.email} onChange={handleChange}
               placeholder="name@example.com" className={errors.email ? "invalid" : ""} />
        <small className="error">{errors.email}</small>
      </label>

      <label>Course of study
        <select name="course" value={form.course} onChange={handleChange}
                className={errors.course ? "invalid" : ""}>
          <option value="">Select a course</option>
          {courses.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <small className="error">{errors.course}</small>
      </label>

      <label className="check">
        <input type="checkbox" name="enrolled" checked={form.enrolled} onChange={handleChange} />
        Currently enrolled
      </label>

      <div className="modal-actions">
        <button type="button" className="btn btn-outline" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn btn-blue">Save student</button>
      </div>
    </form>
  );
}
