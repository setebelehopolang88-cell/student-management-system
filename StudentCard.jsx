import { getInitials } from "../helpers.js";

// ONE student shown as a card.
// Props: the student, plus two functions from App (onEdit, onDelete).
export default function StudentCard({ student, onEdit, onDelete }) {
  return (
    <article className={student.enrolled ? "card" : "card card-inactive"}>
      <div className="card-top">
        <div className="avatar">{getInitials(student.name)}</div>
        <div>
          <h3>{student.name}</h3>
          <span className="id-badge">{student.studentId}</span>
        </div>
      </div>

      <dl className="details">
        <div><dt>Age</dt><dd>{student.age}</dd></div>
        <div><dt>Email</dt><dd>{student.email}</dd></div>
        <div><dt>Course</dt><dd>{student.course}</dd></div>
      </dl>

      <span className={student.enrolled ? "status status-on" : "status status-off"}>
        {student.enrolled ? "Enrolled" : "Not enrolled"}
      </span>

      <div className="card-actions">
        <button className="btn btn-blue" onClick={() => onEdit(student)}>Edit</button>
        <button className="btn btn-black" onClick={() => onDelete(student)}>Delete</button>
      </div>
    </article>
  );
}
