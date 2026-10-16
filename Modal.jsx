// The popup box. Anything placed between <Modal> and </Modal> shows inside it.
export default function Modal({ title, onClose, children }) {
  return (
    <div className="overlay" onClick={onClose}>
      {/* stopPropagation: clicking inside the box should NOT close it */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h2>{title}</h2>
          <button className="close" onClick={onClose} aria-label="Close">X</button>
        </div>
        {children}
      </div>
    </div>
  );
}
