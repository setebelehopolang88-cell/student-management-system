// Three small boxes showing how many students there are.
// "students" arrives as a prop from App.
export default function Stats({ students }) {
  const total = students.length;
  const enrolled = students.filter((s) => s.enrolled).length;
  const notEnrolled = total - enrolled;

  return (
    <section className="stats">
      <div className="stat"><strong>{total}</strong><span>Total students</span></div>
      <div className="stat"><strong>{enrolled}</strong><span>Enrolled</span></div>
      <div className="stat"><strong>{notEnrolled}</strong><span>Not enrolled</span></div>
    </section>
  );
}
