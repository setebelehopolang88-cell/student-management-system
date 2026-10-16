import { useState } from "react";
import { emptyStudent, starterStudents } from "./data/students.js";
import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Modal from "./components/Modal.jsx";
import StudentForm from "./components/StudentForm.jsx";
import DeleteConfirm from "./components/DeleteConfirm.jsx";

export default function App() {
  // STATE = data React remembers. When it changes, the screen updates by itself.
  // 1. the list of students (loaded from localStorage, or the starter list)
  const [students, setStudents] = useState(
    () => JSON.parse(localStorage.getItem("students")) || starterStudents
  );
  // 2. which popup is open: "add", "edit", "delete", or "" for none
  const [modal, setModal] = useState("");
  // 3. the student being edited or deleted
  const [selected, setSelected] = useState(emptyStudent);

  // Saves the new list on screen AND in localStorage, then closes the popup
  const saveList = (newList) => {
    setStudents(newList);
    localStorage.setItem("students", JSON.stringify(newList));
    setModal("");
  };

  const openModal = (type, student = emptyStudent) => {
    setSelected(student);
    setModal(type);
  };
  const closeModal = () => setModal("");

  // ADD: put the new student at the end of the list
  const addStudent = (student) => {
    saveList([...students, { ...student, id: Date.now() }]);
  };

  // EDIT: swap the old student for the updated one
  const editStudent = (student) => {
    saveList(students.map((s) => (s.id === student.id ? student : s)));
  };

  // DELETE: keep everyone except the selected student
  const deleteStudent = () => {
    saveList(students.filter((s) => s.id !== selected.id));
  };

  return (
    <div>
      <Header />

      <main className="main">
        <Stats students={students} />

        <div className="toolbar">
          <h2>All students</h2>
          <button className="btn btn-blue" onClick={() => openModal("add")}>+ Add student</button>
        </div>

        {students.length === 0 && (
          <p className="empty">No students yet. Click "Add student" to begin.</p>
        )}

        <div className="grid">
          {students.map((s) => (
            <StudentCard
              key={s.id}
              student={s}
              onEdit={(student) => openModal("edit", student)}
              onDelete={(student) => openModal("delete", student)}
            />
          ))}
        </div>
      </main>

      {modal === "add" && (
        <Modal title="Add student" onClose={closeModal}>
          <StudentForm student={emptyStudent} students={students} onSave={addStudent} onCancel={closeModal} />
        </Modal>
      )}

      {modal === "edit" && (
        <Modal title="Edit student" onClose={closeModal}>
          <StudentForm student={selected} students={students} onSave={editStudent} onCancel={closeModal} />
        </Modal>
      )}

      {modal === "delete" && (
        <Modal title="Delete student" onClose={closeModal}>
          <DeleteConfirm student={selected} onConfirm={deleteStudent} onCancel={closeModal} />
        </Modal>
      )}
    </div>
  );
}
