// The "are you sure?" message inside the delete popup.
export default function DeleteConfirm({ student, onConfirm, onCancel }) {
  return (
    <>
      <p className="confirm-text">
        Are you sure you want to delete <strong>{student.name}</strong> ({student.studentId})?
        This cannot be undone.
      </p>
      <div className="modal-actions">
        <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
        <button className="btn btn-black" onClick={onConfirm}>Yes, delete</button>
      </div>
    </>
  );
}
